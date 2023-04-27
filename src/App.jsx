import { Fragment } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photography from "./pages/Photography";
import FilmDirection from "./pages/FilmDirection";
import Projects from "./pages/Projects";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/film-direction" element={<FilmDirection />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
