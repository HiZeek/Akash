import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { Link } from "react-router-dom";
import PhotographyDisplay from "../Photography/PhotographyDisplay";

const PhotographyPortfolio = () => {
  return (
    <section className="bg-darkColor h-[1389px] overflow-hidden backdrop relative">
      <div className="photographyTop absolute top-0 z-10" />
      <PhotographyDisplay />
      <Container className="px-5">
        <div className="flex justify-between items-center absolute bottom-20 z-20 text-white w-[1280px] m-auto">
          <div>
            <h3 className="text-6xl font-normal">Visit complete portfolio</h3>
            <p className="font-normal text-base mt-6">EDITORIAL | FASHION</p>
          </div>
          <Button className="text-white border py-5 px-[67px] borderGradient bg-black text-2xl">
            <Link to="/photography">View All</Link>
          </Button>
        </div>
      </Container>

      <div className="photographyBottom absolute -bottom-[7px] z-10" />
    </section>
  );
};

export default PhotographyPortfolio;
