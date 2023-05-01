import { Fragment } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photography from "./pages/Photography";
import FilmDirection from "./pages/FilmDirection";
import ProjectDetails from "./pages/ProjectDetails";
import PhotographyCategory from "./pages/PhotographyCategory";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route
            path="/photography/:photographyId"
            element={<PhotographyCategory />}
          />
          <Route path="/film-direction" element={<FilmDirection />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
