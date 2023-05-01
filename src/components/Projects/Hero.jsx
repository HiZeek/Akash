import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { Link, useParams } from "react-router-dom";

// Images
import ArrowRight from "../../assets/img/arrow-right.png";
import SnaplarkLogo from "../../assets/img/SnaplarkLogo.png";
import Snaplark from "../../assets/img/Snaplark.png";
import { projectList } from "../../utils/projects";

const Hero = () => {
  const { projectId } = useParams();
  return (
    <section className="projectsBackdrop py-10 relative h-screen">
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
        <div className="mt-[100px] relative z-10">
          {projectList.map(
            (project, i) =>
              projectId === project.Title.toLowerCase() && (
                <div key={i}>
                  <div className="flex gap-[26px]">
                    <img
                      src={SnaplarkLogo}
                      alt="SnaplarkLogo"
                      className="w-[83px] h-[83px]"
                    />
                    <h2 className="font-bold text-[64px] text-white">
                      {project.Title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-[70px] text-white">
                    <div>
                      <img
                        src={Snaplark}
                        alt="Snaplark"
                        className="w-[687px] h-[508px]"
                      />
                    </div>
                    <div>
                      <h2 className="font-normal text-[54px]">
                        Unique Features:
                      </h2>
                      <ul className="font-normal text-[28px] list-disc">
                        {project.uniqueFeatures.map((feat, i) => (
                          <li key={i}>{feat.feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </Container>
      <div className="backdrop h-[350px] absolute bottom-0 w-full" />
      <div className="h-[317px] projectsBottom absolute bottom-0 w-full" />
    </section>
  );
};

export default Hero;
