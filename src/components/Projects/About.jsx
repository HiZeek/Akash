import Button from "../../ui/Button";
import Container from "../../ui/Container";

const About = () => {
  return (
    <section className="bg-black pt-[100px] pb-20 backdrop text-white">
      <Container className="px-5">
        <h2 className="font-normal text-[54px] mb-5">About this project</h2>
        <p className="font-normal text-[28px]">
          Snaplark is the leading screenshot and GIF recording software,
          tailored to users most requested functionalities. Created by me and a
          team of professionals, the software functions with precision and
          finesse for a satisfactory result. With over a million medias
          uploaded. Snaplark has become the regular PC user’s favourite
          software. Taking into cognizance what traditional screenshot apps
          lack, Snaplark inculcates all the most requested features to give it a
          unique edge over others.
        </p>
        <div className="flex gap-10 items-center pl-[50px] mt-[50px] text-2xl">
          <Button className="text-white border py-5 px-[64px] borderGradient bg-black">
            <a href="#">Visit Website</a>
          </Button>
          <a href="mailto:support@snaplark.com">support@snaplark.com</a>
        </div>
      </Container>
    </section>
  );
};

export default About;
