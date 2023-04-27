import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

// Images
import ArrowRight from "../../assets/img/arrow-right.png";
import PlayVid from "../../assets/img/PlayVid.png";

const Hero = () => {
  return (
    <section className="filmDirectionBackdrop py-10 relative">
      <Container className="px-5">
        <div className="flex justify-between items-center">
          <Button className="font-medium bg-white text-2xl py-5 px-11 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
            <Link to="/">Back to Homepage</Link>
          </Button>
          <Button className="flex items-center gap-4 text-2xl font-medium bg-white py-5 px-11 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
            Next Project
            <img
              src={ArrowRight}
              alt="ArrowRight"
              className="w-[42px] h-[42px]"
            />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center playBtn">
          <img
            src={PlayVid}
            alt="PlayVid"
            className="cursor-pointer w-[79px] h-[79px]"
          />
        </div>
      </Container>
      <div className="h-[445px] filmDirectionBottom absolute bottom-0 z-20 w-full" />
    </section>
  );
};

export default Hero;
