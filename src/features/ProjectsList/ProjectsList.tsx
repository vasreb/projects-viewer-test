import { Repository } from "Generated";

import { Link } from "react-router-dom";
import { Card, usePageBottom } from "@/shared";
import "./styles.scss";

interface Props {
  data: Array<{ node: Repository }>;
  onFetchMore: () => void;
}

const ProjectsList = ({ data, onFetchMore }: Props) => {
  usePageBottom(onFetchMore);

  return (
    <div className="ProjectsList">
      {data?.map((edge) => (
        <Card className="ProjectsList__Card" key={edge?.node?.id}>
          <Card.Header>
            <Link
              to={`/project?owner=${edge?.node?.owner?.login}&name=${edge?.node?.name}`}
            >
              {edge?.node?.name}
            </Link>
            <div className="ProjectCard__Owner">
              by {edge?.node?.owner?.login}
            </div>
          </Card.Header>
          <Card.Body>
            <div>{edge?.node?.description}</div>
          </Card.Body>
          <Card.Bottom>
            <div className="ProjectCard__BottomText">
              Stars: {edge?.node?.stargazerCount} | Forks:{" "}
              {edge?.node?.forkCount} | Languages:
              {edge?.node?.languages?.edges?.map((l) => ` ${l?.node.name}`)}
            </div>
          </Card.Bottom>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
