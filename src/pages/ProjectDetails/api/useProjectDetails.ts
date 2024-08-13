import {
  ProjectDetailsQuery,
  useProjectDetailsQuery,
} from "@/shared/api/generated/graphql";

const useProjectDetails = (owner: string, name: string) => {
  const { data, loading, error } = useProjectDetailsQuery({
    variables: { owner, name },
    fetchPolicy: "cache-and-network",
  });

  const calculateLanguagePercentage = (
    languages: NonNullable<ProjectDetailsQuery["repository"]>["languages"]
  ) => {
    if (!languages?.edges) {
      return [];
    }

    const totalSize = languages.edges.reduce(
      (total, lang) => total + (lang?.size || 0),
      0
    );

    return languages.edges.map((lang) => ({
      name: lang?.node.name,
      color: lang?.node.color,
      percentage: (((lang?.size || 0) / totalSize) * 100).toFixed(2),
    }));
  };

  const repository = data?.repository;

  const languages = repository?.languages
    ? calculateLanguagePercentage(repository.languages)
    : [];

  return {
    data: repository,
    languages,
    loading,
    error,
  };
};

export default useProjectDetails;
