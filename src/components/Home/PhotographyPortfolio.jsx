import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { Link } from "react-router-dom";
import PhotographyDisplay from "../Photography/PhotographyDisplay";
import { photograph, photographyCategory } from "../../utils/photography";

const PhotographyPortfolio = () => {
  return (
    <section className="bg-white md:bg-darkColor py-20 md:h-[1389px] overflow-hidden backdrop relative">
      <div className="photographyTop absolute top-0 z-10 hidden md:block" />
      <div className="hidden md:block">
        <PhotographyDisplay photograph={photograph} />
      </div>
      <Container className="px-5">
        <div className="lg:flex hidden justify-between items-center absolute bottom-20 z-20 text-white w-[1280px] m-auto">
          <div>
            <h3 className="text-6xl font-normal">Visit complete portfolio</h3>
            <p className="font-normal text-base mt-6">EDITORIAL | FASHION</p>
          </div>
          <Button className="borderGradient text-2xl">
            <Link to="/photography">View All</Link>
          </Button>
        </div>
        <div>
          <h2 className="text-[28px] font-normal text-primaryBlack">
            Photography
          </h2>
          <ul className="text-center mt-10 space-y-2">
            {photographyCategory.map((cat, i) => (
              <li key={i} className="cursor-pointer font-normal">
                <Link to={`/photography/${cat.photographId.toLowerCase()}`}>
                  {cat.cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="photographyBottom absolute -bottom-[7px] z-10 hidden md:block" />
    </section>
  );
};

export default PhotographyPortfolio;
