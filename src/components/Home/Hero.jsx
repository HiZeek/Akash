import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

// Images
// import HomeHero from "../../assets/HomeHero1.png";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="backdrop bg-darkColor pt-10 relative h-screen md:h-[919px] overflow-hidden">
      <Container className="px-5">
        <div>
          <h1 className="text-white text-center font-medium text-[22px] sm:text-6xl">
            A step to innovative ideas
            <br />
            <span className="font-bold text-[26px] sm:text-[62px]">
              Let&apos;s take a progressive step
            </span>
          </h1>
          <div className="flex justify-center mt-10 sm:hidden">
            <Button className="borderGradient text-2xl text-white">
              <Link to="/photography">Contact me</Link>
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 max-w-[1440px] m-auto">
        <HeroSlider />
      </div>
      <div className="heroBottom absolute bottom-0 z-10" />
    </section>
  );
};

export default Hero;
