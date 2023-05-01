import { Fragment } from "react";
import Header from "../layout/Header";
import Hero from "../components/Home/Hero";
import Footer from "../layout/Footer";
import Contact from "../components/Home/Contact";
import PhotographyPortfolio from "../components/Home/PhotographyPortfolio";
import FilmDirection from "../components/Home/FilmDirection";
import Projects from "../components/Home/Projects";

//

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Projects />
        <FilmDirection />
        <PhotographyPortfolio />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
