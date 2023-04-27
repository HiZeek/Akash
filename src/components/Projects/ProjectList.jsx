import Container from "../../ui/Container";
import { projects } from "../../utils/projects";

// Images
import WhiteArrowRight from "../../assets/img/whitearrow-right.png";

const ProjectList = () => {
  return (
    <section className="bg-black backdrop text-white pb-20 pl-[50px]">
      <Container className="px-5">
        <div>
          <h2 className="font-normal text-[54px] mb-10">Other Project</h2>
          <div className="flex flex-col gap-10">
            {projects.map((project, i) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectList;
