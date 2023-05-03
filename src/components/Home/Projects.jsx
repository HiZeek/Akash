import { useEffect, useState } from "react";
import Container from "../../ui/Container";
import { projectList } from "../../utils/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectData, setProjectData] = useState(projectList);
  const [videoSrc, setVideoSrc] = useState(null);

  console.log("project data", projectData);

  useEffect(() => {
    const hasHover = projectData.filter((project) => project.isHovered);
    if (hasHover.length) {
      setVideoSrc(hasHover[0].video);
    }
  }, [projectData]);

  const handleProjectHover = (index) => {
    setProjectData(
      projectData.map((project, i) => {
        if (i === index) {
          return {
            ...project,
            isHovered: true,
          };
        } else {
          return {
            ...project,
            isHovered: false,
          };
        }
      })
    );
  };
  return (
    <section className="relative md:h-screen w-full py-10 md:py-20 flex flex-col justify-center">
      {projectData.map((project, i) => (
        <div key={i}>
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover absolute top-0 left-0"
          />
          <Container className="px-5 relative z-20">
            <div
              className="max-w-[644px] group cursor-pointer my-2"
              onMouseEnter={() => handleProjectHover(i)}
            >
              <Link to={`/project/${project.Title.toLowerCase()}`}>
                <h2
                  className={`drukFont font-bold text-2xl md:text-[66px] group-hover:text-white md:leading-[86.2px] ${
                    project.isHovered ? "text-white" : "text-[#CECECE]"
                  }`}
                >
                  {project.Title}
                </h2>
                <p
                  className={`text-sm md:text-2xl font-normal group-hover:block text-white ${
                    project.isHovered ? "block" : "hidden"
                  }`}
                >
                  {project.desc}
                </p>
              </Link>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default Projects;
