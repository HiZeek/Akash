import { useState } from "react";
import Container from "../../ui/Container";
import { projectList } from "../../utils/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectData, setProjectData] = useState(projectList);
  const handleHover = (index) => {
    const updatedProjectData = [...projectData];
    updatedProjectData[index].isHovered = true;
    // updatedProjectData.forEach((project, i) => {
    //   updatedProjectData[i].isHovered = i === index ? true : false;
    // });
    updatedProjectData.forEach((project, i) => {
      if (i !== index) {
        updatedProjectData[i].isHovered = false;
      }
    });

    setProjectData(updatedProjectData);
  };
  return (
    <section className="relative h-screen w-full py-20 flex flex-col justify-center">
      {projectData.map((project, i) => (
        <div key={i}>
          <video
            src={project.isHovered && project.video}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover absolute top-0 left-0"
          />
          <Container className="px-5 relative z-20">
            <Link
              to={`/project/${project.Title.toLowerCase()}`}
              className="max-w-[644px] group cursor-pointer"
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => {
                const updatedProjectData = [...projectData];
                updatedProjectData[i].isHovered = false;
                setProjectData(updatedProjectData);
              }}
            >
              <h2 className="drukFont font-bold text-[66px] text-[#CECECE] group-hover:text-white leading-[86.2px]">
                {project.Title}
              </h2>
              <p className="text-2xl font-normal hidden group-hover:block text-white">
                {project.desc}
              </p>
            </Link>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default Projects;
