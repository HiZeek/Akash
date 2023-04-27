import { Fragment } from "react";
import Footer from "../layout/Footer";
import Hero from "../components/Projects/Hero";
import About from "../components/Projects/About";
import ProjectList from "../components/Projects/ProjectList";

const Projects = () => {
  return (
    <Fragment>
      <main>
        <Hero />
        <About />
        <ProjectList />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Projects;
