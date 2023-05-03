import { Fragment } from "react";
import Footer from "../layout/Footer";
import PhotographyDisplay from "../components/Photography/PhotographyDisplay";
import PhotographyMenu from "../components/Photography/PhotographyMenu";
import { photograph } from "../utils/photography";

const Photography = () => {
  return (
    <Fragment>
      <main className="bg-darkColor backdrop">
        <div className="flex gap-5 max-w-[1440px] m-auto">
          <div className="w-[337px]">
            <PhotographyMenu />
          </div>
          <div className="photographyPort p-10 text-[22px]">
            <PhotographyDisplay photograph={photograph} />
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Photography;
