import { Fragment } from "react";
import Header from "../layout/Header";
import Hero from "../components/Home/Hero";
import Footer from "../layout/Footer";
import Contact from "../components/Home/Contact";
import PhotographyPortfolio from "../components/Home/PhotographyPortfolio";
import FilmDirection from "../components/Home/FilmDirection";

//

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <FilmDirection />
        <PhotographyPortfolio />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
