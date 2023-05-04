import { Fragment } from "react";
import Footer from "../layout/Footer";
import PhotographyMenu from "../components/Photography/PhotographyMenu";
import CategoryPictures from "../components/Photography/CategoryPictures";

const PhotographyCategory = () => {
  return (
    <Fragment>
      <main className="bg-white md:bg-darkColor backdrop">
        <div className="flex gap-5 max-w-[1440px] m-auto">
          <div className="w-[337px] hidden md:block">
            <PhotographyMenu />
          </div>
          <div className="w-full md:photographyPort p-10 text-[22px]">
            <CategoryPictures />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default PhotographyCategory;
