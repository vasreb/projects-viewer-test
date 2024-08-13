import SearchProjects from "@/pages/SearchProjects";
import ProjectDetails from "@/pages/ProjectDetails";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="project" element={<ProjectDetails />} />
        <Route path="search" element={<SearchProjects />} />

        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
