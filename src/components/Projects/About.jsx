import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { projectList } from "../../utils/projects";

const About = () => {
  const { projectId } = useParams();
  return (
    <section className="bg-black pt-[100px] pb-20 backdrop text-white">
      <Container className="px-5">
        <h2 className="font-normal text-[54px] mb-5">About this project</h2>
        {projectList.map(
          (project, i) =>
            projectId === project.Title.toLowerCase() && (
              <div key={i}>
                <p className="font-normal text-[28px]">{project.fullDesc}</p>
                <div className="flex gap-10 items-center pl-[50px] mt-[50px] text-2xl">
                  <Button className="text-white border py-5 px-[64px] borderGradient bg-black">
                    <a href={project.url}>Visit Website</a>
                  </Button>
                  <a href="mailto:support@snaplark.com">support@snaplark.com</a>
                </div>
              </div>
            )
        )}
      </Container>
    </section>
  );
};

export default About;
