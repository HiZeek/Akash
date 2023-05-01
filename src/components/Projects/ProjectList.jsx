import Container from "../../ui/Container";
import { projects } from "../../utils/projects";

// Images
import WhiteArrowRight from "../../assets/img/whitearrow-right.png";
import { Link, useParams } from "react-router-dom";

const ProjectList = () => {
  const { projectId } = useParams();

  return (
    <section className="bg-black backdrop text-white pb-20 pl-[50px]">
      <Container className="px-5">
        <div>
          <h2 className="font-normal text-[54px] mb-10">Other Project</h2>
          <div className="flex flex-col gap-10">
            {projects.map(
              (project, i) =>
                projectId !== project.Title.toLowerCase() && (
                  <Link
                    to={`/project/${project.Title.toLowerCase()}`}
                    key={i}
                    className="bg-cover bg-center bg-no-repeat py-[45px] px-[60px] rounded-2xl cursor-pointer flex justify-between"
                    style={{ backgroundImage: `url(${project.img})` }}
                  >
                    <p className="font-bold text-6xl">{project.Title}</p>
                    <img
                      src={WhiteArrowRight}
                      alt="ArrowRight"
                      className="w-[79px] h-[79px]"
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

export default ProjectList;
