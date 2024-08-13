import { Repository, useSearchProjectsQuery } from "Generated";

const useSearchProjects = ({ query }: { query: string }) => {
  const { data, loading, fetchMore, error } = useSearchProjectsQuery({
    variables: {
      query,
    },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    if (data?.search?.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          query,
          after: data.search.pageInfo.endCursor,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;

          return {
            ...fetchMoreResult,
            search: {
              ...fetchMoreResult.search,
              edges: [
                ...(prevResult.search.edges || []),
                ...(fetchMoreResult.search.edges || []),
              ],
            },
          };
        },
      });
    }
  };

  console.log("loading", loading);

  return {
    data: data?.search?.edges as Array<{ node: Repository }>,
    fetchMore: loadMore,
    loading,
    error,
  };
};

export default useSearchProjects;
