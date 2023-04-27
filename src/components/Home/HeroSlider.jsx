// import { useState, useEffect } from "react";
import { heroBg } from "../../utils/herobg";
import Slider from "infinite-react-carousel";

// Images
import HeroLink from "../../assets/img/HeroLink.png";

const HeroSlider = () => {
  //   const [position, setPosition] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setPosition((position) => position + 1);
  //     }, 10);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap absolute bottom-0">
      {/* <div
        className="whitespace-nowrap w-full h-full flex gap-20 justify-center"
        // style={{ transform: `translateX(-${position}px)` }}
      > */}
      <Slider>
        {heroBg.map((hero, i) => (
          <div key={i} className="relative group">
            <img
              src={hero.img}
              key={i}
              alt="Homepage Snaplark"
              className="w-[826px] h-[643px] m-auto"
            />
            <a
              href={hero.link}
              className="absolute top-0 right-0 hidden group-hover:block"
            >
              <img src={HeroLink} alt="Link" className="w-[50px] h-[50px]" />
            </a>
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default HeroSlider;
