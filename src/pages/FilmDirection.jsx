import { Fragment } from "react";
import Footer from "../layout/Footer";
import Hero from "../components/FilmDirection/Hero";
import AboutProject from "../components/FilmDirection/AboutProject";
// import ProjectSlider from "../components/FilmDirection/ProjectSlider";

const FilmDirection = () => {
  return (
    <Fragment>
      <main>
        <Hero />
        <AboutProject />
        {/* <ProjectSlider /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default FilmDirection;
