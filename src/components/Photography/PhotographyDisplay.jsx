import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { photograph } from "../../utils/photography";
import { useLocation } from "react-router-dom";

const PhotographyDisplay = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        {photograph.map((image, i) => (
          <div
            key={i}
            className="relative bg-cover bg-center bg-no-repeat rounded-2xl inline-block cursor-pointer"
            style={{
              backgroundImage: `url(${image.src})`,
              height: image.height,
              width: `${image.Width} !important`,
            }}
          >
            <p
              className={`text-center w-full absolute mb-[30px] bottom-0 text-white z-30 font-normal ${
                pathName === "/photography" ? "text-[22px]" : "text-[28px]"
              }`}
            >
              {image.category}
            </p>
            <div className="singlePhotographyBottom absolute rounded-2xl bottom-0" />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default PhotographyDisplay;
