import { Link, useNavigate } from "react-router-dom";
import useProjectDetails from "../api/useProjectDetails";

import {
  ArrowLeftIcon,
  ScrollToTop,
  useQueryParameters,
  Avatar,
  Chip,
  Card,
  Color,
  Loader,
  SvgWrapper,
} from "@/shared";

import "./styles.scss";

const ProjectDetails = () => {
  const { owner, name } = useQueryParameters<{ owner: string; name: string }>();
  const { data, languages, loading, error } = useProjectDetails(owner, name);
  const navigate = useNavigate();

  if (loading && !data) return <Loader />;

  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>No data found.</p>;

  return (
    <>
      <ScrollToTop />
      <div className="ProjectDetails">
        <div className="ProjectDetails__Header">
          <button
            className="ProjectDetails__Back"
            onClick={() => navigate("/search")}
          >
            <SvgWrapper size="36">
              <ArrowLeftIcon />
            </SvgWrapper>
          </button>
          <h2>{data.name}</h2>
        </div>
        <div className="ProjectDetails__Owner">
          <Avatar src={data.owner.avatarUrl} alt={data.owner.login} />
          <Link
            className="ProjectDetails__OwnerName"
            to={data.owner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.owner.login}
          </Link>
        </div>
        <div className="ProjectDetails__Description">{data.description}</div>
        <div className="ProjectDetails__Features">
          <Chip label={`Stars: ${data.stargazerCount}`} />
          <Chip label={`Forks: ${data.forkCount}`} />
          <Chip label={`Watchers: ${data.watchers.totalCount}`} />
          <Chip label={`Pull Requests: ${data.pullRequests.totalCount}`} />
          <Chip label={`Releases: ${data.releases.totalCount}`} />
          <Chip label={`Disk Usage: ${data.diskUsage} KB`} />
          <Chip
            label={`Updated: ${new Date(data.updatedAt).toLocaleDateString()}`}
          />
          <Chip
            label={`Pushed: ${new Date(data.pushedAt).toLocaleDateString()}`}
          />
        </div>
        <Card className="ProjectDetails__Card">
          <Card.Header>
            <h4>Languages</h4>
          </Card.Header>
          <Card.Body>
            {languages.map((lang) => (
              <div key={lang.name} className="ProjectDetails__LanguageItem">
                <Color color={lang.color || ""} />
                {lang.name}: {lang.percentage}%
              </div>
            ))}
          </Card.Body>
        </Card>
        <Card className="ProjectDetails__Card">
          <Card.Header>
            <h4>Contributors</h4>
          </Card.Header>
          <Card.Body>
            {data?.contributors?.nodes?.map((contributor) => {
              if (!contributor) return null;

              return (
                <div
                  className="ProjectDetails__ContribItem"
                  key={contributor.login}
                >
                  <Avatar src={contributor.avatarUrl} alt={contributor.login} />
                  <Link
                    to={contributor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contributor.login}
                  </Link>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProjectDetails;
