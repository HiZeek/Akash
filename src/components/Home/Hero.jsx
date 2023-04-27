import Container from "../../ui/Container";

// Images
// import HomeHero from "../../assets/HomeHero1.png";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="backdrop bg-darkColor pt-10 relative h-[919px]">
      <Container className="px-5">
        <div>
          <h1 className="text-white text-center font-medium text-6xl">
            A step to innovative ideas
            <br />
            <span className="font-bold text-[62px]">
              Let&apos;s take a progressive step
            </span>
          </h1>
        </div>
        {/* <div className="flex justify-center">
          <img
            src={HomeHero}
            alt="Homepage Snaplark"
            className="w-[826px] h-[643px] m-auto absolute bottom-0"
          />
        </div> */}
      </Container>
      <HeroSlider />
      <div className="heroBottom absolute bottom-0 z-10" />
    </section>
  );
};

export default Hero;
