import { ProjectsList } from "@/features";
import useSearchProjects from "../api/useSearchProjects";
import { CircularProgress, Typography, Box } from "@mui/material";

const SearchProjects = () => {
  const { data, loading, error } = useSearchProjects({
    query: "language:typescript sort:stars-desc",
  });

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <ProjectsList data={data} onFetchMore={() => console.log("fetch")} />
      {loading && <CircularProgress />}
    </Box>
  );
};

export default SearchProjects;
