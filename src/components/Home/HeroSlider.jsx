import { heroBg } from "../../utils/herobg";
// import Slider from "infinite-react-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Images
import HeroLink from "../../assets/img/HeroLink.png";

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={66}
      centeredSlides={true}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      // breakpoints={{
      //   //   // 320: { slidesPerView: "auto", spaceBetween: 30 },
      //   768: { slidesPerView: "auto", spaceBetween: 30 },
      //   //   // 1024: { slidesPerView: 2, spaceBetween: 50 },
      // }}
      className="mySwiper md:pt-28"
    >
      {heroBg.map((hero, i) => (
        <SwiperSlide key={i} className="group relative">
          <img
            src={hero.img}
            key={i}
            alt="Homepage Snaplark"
            className={`w-[826px] h-full md:h-[542.84px]`}
          />
          <a
            href={hero.link}
            className="absolute -top-28 -right-[70px] z-30 hidden group-hover:block"
            target="_blank"
            rel="noreferrer"
          >
            <img src={HeroLink} alt="Link" className="w-[167px] h-[166.36px]" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
