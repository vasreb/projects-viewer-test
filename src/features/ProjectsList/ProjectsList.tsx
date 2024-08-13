import { Repository } from "Generated";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Link as MUILink,
  Box,
  ListItemAvatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { usePageBottom } from "@/shared";

interface Props {
  data: Array<{ node: Repository }>;
  onFetchMore: () => void;
}

const ProjectsList = ({ data, onFetchMore }: Props) => {
  usePageBottom(onFetchMore);

  return (
    <List>
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
                  <MUILink> {edge?.node?.name}</MUILink>
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
    </List>
  );
};

export default ProjectsList;
