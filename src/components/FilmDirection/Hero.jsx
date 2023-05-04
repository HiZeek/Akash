import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

// Images
import ArrowRight from "../../assets/img/arrow-right.png";
import PlayVid from "../../assets/img/PlayVid.png";
import HomeIcon from "../../assets/icons/home.svg";
import NextIcon from "../../assets/icons/next.svg";

const Hero = () => {
  return (
    <section className="filmDirectionBackdrop py-10 relative">
      <Container className="px-5">
        <div className="flex justify-between items-center">
          <div>
            <Button className="hidden md:block font-medium bg-white text-2xl py-5 px-11 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
              <Link to="/">Back to Homepage</Link>
            </Button>
            <Link to="/">
              <img src={HomeIcon} alt="Home Icon" className="md:hidden" />
            </Link>
          </div>
          <div>
            <Button
              // onClick={handleNext}
              className="hidden md:flex items-center gap-4 text-2xl font-medium bg-white py-5 px-11 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]"
            >
              Next Project
              <img
                src={ArrowRight}
                alt="ArrowRight"
                className="w-[42px] h-[42px]"
              />
            </Button>
            <img
              src={NextIcon}
              // onClick={handleNext}
              alt="Home Icon"
              className="md:hidden"
            />
          </div>
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
