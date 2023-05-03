import { Link, useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { projectList } from "../../utils/projects";

// Images
import WhiteArrowRight from "../../assets/img/whitearrow-right.png";

const About = () => {
  const { projectId } = useParams();
  // pt-[300px] lg:pt-[100px]
  return (
    <section className="bg-black  pb-20 backdrop text-white">
      <Container className="px-5">
        <h2 className="font-normal text-[28px] md:text-[54px] mb-5">
          About this project
        </h2>
        {projectList.map(
          (project, i) =>
            projectId === project.Title.toLowerCase() && (
              <div key={i}>
                <p className="font-normal text-base md:text-[28px]">
                  {project.fullDesc}
                </p>
                <div className="flex flex-col md:flex-row gap-10 items-start md:items-center md:pl-[50px] mt-[50px]">
                  <Button className="text-white text-lg md:text-2xl border py-5 px-[64px] borderGradient bg-black">
                    <a href={project.url}>Visit Website</a>
                  </Button>
                  <a
                    href={`mailto:${project.mail}`}
                    className="text-base md:text-[28px]"
                  >
                    {project.mail}
                  </a>
                </div>
              </div>
            )
        )}
        <div className="py-10">
          <h2 className="font-normal text-[28px] md:text-[54px] mb-10">
            Other Project
          </h2>
          <div className="flex flex-col gap-10">
            {projectList.map(
              (project, i) =>
                projectId !== project.Title.toLowerCase() && (
                  <Link
                    to={`/project/${project.Title.toLowerCase()}`}
                    key={i}
                    className="bg-cover bg-center bg-no-repeat py-[15px] px-[21px] lg:py-[45px] lg:px-[60px] rounded-2xl cursor-pointer flex justify-between"
                    style={{ backgroundImage: `url(${project.img})` }}
                  >
                    <p className="font-bold text[21.24px] lg:text-6xl">
                      {project.Title}
                    </p>
                    <img
                      src={WhiteArrowRight}
                      alt="ArrowRight"
                      className="w-[27.96px] h-[27.96px] lg:w-[79px] lg:h-[79px]"
                    />
                  </Link>
                )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
