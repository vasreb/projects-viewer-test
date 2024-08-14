import { Repository } from "Generated";

import { usePageBottom } from "@/shared";
import "./styles.scss";
import ProjectListItem from "./ProjectListItem";

interface Props {
  data: Array<{ node: Repository }>;
  onFetchMore: () => void;
}

const ProjectsList = ({ data, onFetchMore }: Props) => {
  usePageBottom(onFetchMore);

  return (
    <div className="ProjectsList">
      {data?.map((edge) => (
        <ProjectListItem node={edge.node} />
      ))}
    </div>
  );
};

export default ProjectsList;
