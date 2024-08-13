import { ProjectsList } from "@/features";
import useSearchProjects from "../api/useSearchProjects";

import "./styles.scss";
import { Loader } from "@/shared";

const SearchProjects = () => {
  const { data, loading, error, fetchMore } = useSearchProjects({
    query: "language:typescript sort:stars-desc",
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="SearchProjects">
      <h2 className="SearchProjects__Title">Search Result</h2>
      <ProjectsList data={data} onFetchMore={fetchMore} />
      {loading && <Loader />}
    </div>
  );
};

export default SearchProjects;
