import { Fragment } from "react";
import Footer from "../layout/Footer";
import PhotographyMenu from "../components/Photography/PhotographyMenu";
import Category from "../components/Photography/Category";

const PhotographyCategory = () => {
  return (
    <Fragment>
      <main className="bg-darkColor backdrop">
        <div className="flex gap-5 max-w-[1440px] m-auto">
          <div className="w-[337px]">
            <PhotographyMenu />
          </div>
          <div className="photographyPort p-10 text-[22px]">
            <Category />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default PhotographyCategory;
