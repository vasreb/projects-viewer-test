import { Link } from "react-router-dom";
import useSearchProjects from "../api/useSearchProjects";
import {
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Box,
} from "@mui/material";
import InfinityList from "@/shared/ui/InfinityList";

const SearchProjects = () => {
  const { data, loading, error } = useSearchProjects({
    query: "language:typescript sort:stars-desc",
  });

  if (loading && !data) {
    return <CircularProgress />;
  }

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <List>
        <InfinityList onBottom={() => console.log("bottom")}>
          {data?.map((edge) => (
            <ListItem key={edge?.node?.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  src={edge?.node?.owner?.avatarUrl}
                  alt={edge?.node?.owner?.login}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box>
                    <Link
                      to={`/project?owner=${edge?.node?.owner?.login}&name=${edge?.node?.name}`}
                    >
                      {edge?.node?.name}
                    </Link>
                    <Typography variant="body2" color="textSecondary">
                      {`by ${edge?.node?.owner?.login}`}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body1" gutterBottom>
                      {edge?.node?.description}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Stars: {edge?.node?.stargazerCount} | Forks:{" "}
                      {edge?.node?.forkCount}
                    </Typography>{" "}
                    |{" "}
                    <Typography variant="caption" color="textSecondary">
                      {`Languages: ${edge?.node?.languages?.edges?.map(
                        (l) => ` ${l?.node.name}`
                      )}`}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </InfinityList>
      </List>
    </Box>
  );
};

export default SearchProjects;
