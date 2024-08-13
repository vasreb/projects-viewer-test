import { useNavigate } from "react-router-dom";
import useProjectDetails from "../api/useProjectDetails";
import {
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
  Chip,
  Link as MUILink,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQueryParameters } from "@/shared";

const ProjectDetails = () => {
  const { owner, name } = useQueryParameters<{ owner: string; name: string }>();
  const { data, languages, loading, error } = useProjectDetails(owner, name);
  const navigate = useNavigate();

  if (loading && !data) return <CircularProgress />;

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  if (!data) return <Typography>No data found.</Typography>;

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom sx={{ marginLeft: 2 }}>
          {data.name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Avatar src={data.owner.avatarUrl} alt={data.owner.login} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6">
            <MUILink
              href={data.owner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.owner.login}
            </MUILink>
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" paragraph>
        {data.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}>
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
      </Box>
      <Typography variant="h6" gutterBottom>
        Languages
      </Typography>
      <List>
        {languages.map((lang) => (
          <ListItem key={lang.name}>
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: lang.color,
                marginRight: 1,
              }}
            />
            <ListItemText primary={`${lang.name}: ${lang.percentage}%`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Contributors
      </Typography>
      <List>
        {data?.contributors?.nodes?.map((contributor) => {
          if (!contributor) return null;

          return (
            <ListItem key={contributor.login}>
              <ListItemAvatar>
                <Avatar src={contributor.avatarUrl} alt={contributor.login} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <MUILink
                    href={contributor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contributor.login}
                  </MUILink>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ProjectDetails;
