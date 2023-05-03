import { Fragment } from "react";
import Footer from "../layout/Footer";
import Hero from "../components/Projects/Hero";
import About from "../components/Projects/About";

const Projects = () => {
  return (
    <Fragment>
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Projects;
