import {
  Repository,
  useSearchProjectsQuery,
} from "@/shared/api/generated/graphql";

const useSearchProjects = ({ query }: { query: string }) => {
  const { data, loading, error } = useSearchProjectsQuery({
    variables: {
      query,
    },
  });

  return {
    data: data?.search?.edges as Array<{ node: Repository }>,
    loading,
    error,
  };
};

export default useSearchProjects;
