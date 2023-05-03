import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectList } from "../../utils/projects";
import { useEffect, useState } from "react";

// Images
import ArrowRight from "../../assets/img/arrow-right.png";
import SnaplarkLogo from "../../assets/img/SnaplarkLogo.png";
import Snaplark from "../../assets/img/Snaplark.png";

import HomeIcon from "../../assets/icons/home.svg";
import NextIcon from "../../assets/icons/next.svg";

const Hero = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  // const [nextProject, setNextProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(
      projectList.findIndex((item) => item.Title.toLowerCase() === projectId)
    );
  }, [projectId]);

  const handleNext = () => {
    if (currentIndex + 1 !== projectList.length) {
      const nextProject = projectList.find((item, i) => currentIndex + 1 === i);
      console.log(nextProject);
      navigate(`/project/${nextProject.Title.toLowerCase()}`);
    } else {
      navigate(`/project/${projectList[0].Title.toLowerCase()}`);
    }
  };
  return (
    <section className="projectsBackdrop pt-10 md:py-20 relative h-screen md:h-full">
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
              onClick={handleNext}
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
              onClick={handleNext}
              alt="Home Icon"
              className="md:hidden"
            />
          </div>
        </div>
        <div className="mt-[100px] relative z-10">
          {projectList.map(
            (project, i) =>
              projectId === project.Title.toLowerCase() && (
                <div key={i}>
                  <div className="flex items-center gap-[26px]">
                    <img
                      src={SnaplarkLogo}
                      alt="SnaplarkLogo"
                      className=" w-[52px] h-[52px] md:w-[83px] md:h-[83px]"
                    />
                    <h2 className="font-bold text-2xl md:text-[64px] text-white">
                      {project.Title}
                    </h2>
                  </div>
                  <div className="flex flex-col lg:flex-row mt-6 md:mt-[51px] items-center gap-[36.38px] md:gap-[70px] text-white">
                    <div>
                      <img
                        src={Snaplark}
                        alt="Snaplark"
                        className="w-[320px] h-[236.62px] md:w-[687px] md:h-[508px]"
                      />
                    </div>
                    <div>
                      <h2 className="font-normal text-[28px] md:text-[54px]">
                        Unique Features:
                      </h2>
                      <ul className="font-normal text-base md:text-[28px] list-disc">
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
