import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import HeroSlider from "./HeroSlider";
import { useState } from "react";
import { contactLinks } from "../../utils/contact";

// Images
// import HomeHero from "../../assets/HomeHero1.png";
import BorderBottom from "../../assets/icons/border.svg";
import DropDown from "../../assets/icons/dropdown.svg";
import Send from "../../assets/icons/send.svg";

const Hero = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  function toggleDropdown() {
    setDisplayDropdown((prev) => !prev);
  }

  return (
    <section className="backdrop bg-darkColor pt-10 relative h-screen md:h-[1100px] lg:h-[1024px] overflow-hidden">
      <div className="photographyTop absolute top-0 z-10 md:hidden" />
      <Container className="px-5 relative z-30">
        <div>
          <div className="max-w-[850px] m-auto">
            <h1 className="text-white text-center font-medium text-[22px] sm:text-6xl">
              A step to innovative ideas
              <br />
              <span className="font-bold text-[26px] sm:text-[62px]">
                Let&apos;s take a progressive step
              </span>
            </h1>
            <img src={BorderBottom} alt="border" />
          </div>
          <div className="flex justify-center w-full gap-10 mt-10 font-medium text-2xl text-white">
            <div className="text-center">
              <Button className="borderGradient flex items-center py-5 px-[35px] gap-[22px]">
                <a href="#contact">Contact me</a>
                <img
                  src={DropDown}
                  alt="Dropdown"
                  className={`w-[24px] h-[24px] hidden md:block cursor-pointer transition duration-300 ${
                    !displayDropdown && "rotate-180"
                  }`}
                  onClick={toggleDropdown}
                />
              </Button>
              {displayDropdown && (
                <div className="w-[267px] borderGradient py-5 px-[35px] mt-[14px]">
                  <ul className="space-y-4">
                    {contactLinks.map((link, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.link}
                        </a>
                        <img src={Send} alt="Send" className="w-6 h-6" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <Button className="borderGradient py-5 px-[35px] hidden md:block">
                <a href="#" target="_blank">
                  Open Terminal
                </a>
              </Button>
            </div>
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
