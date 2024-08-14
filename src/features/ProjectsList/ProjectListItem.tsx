import { Card } from "@/shared";
import { Repository } from "@/shared/api/generated/graphql";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  node: Repository;
}

const ProjectListItem = ({ node }: Props) => {
  return (
    <Card className="ProjectsList__Card" key={node?.id}>
      <Card.Header>
        <Link to={`/project?owner=${node?.owner?.login}&name=${node?.name}`}>
          {node?.name}
        </Link>
        <div className="ProjectCard__Owner">by {node?.owner?.login}</div>
      </Card.Header>
      <Card.Body>
        <div>{node?.description}</div>
      </Card.Body>
      <Card.Bottom>
        <div className="ProjectCard__BottomText">
          Stars: {node?.stargazerCount} | Forks: {node?.forkCount} | Languages:
          {node?.languages?.edges?.map((l) => ` ${l?.node.name}`)}
        </div>
      </Card.Bottom>
    </Card>
  );
};

export default React.memo(ProjectListItem);
