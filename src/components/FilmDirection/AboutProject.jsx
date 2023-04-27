import Container from "../../ui/Container";

const AboutProject = () => {
  return (
    <section className="bg-white pb-20 -mt-20 backdrop text-black">
      <Container className="px-5">
        <div>
          <h2 className="font-normal text-[54px] relative z-20 mb-5">
            About this project
          </h2>
          <p className="font-normal text-primaryBlack text-[28px]">
            A project done in Delhi, India. Little tough to on the exposure
            control due to a extreme sunny day. Post production was done to
            replace skies and color correct with exposure controls too. Pre
            production in 48 hours and shoot was done in less than 2 hours.
            Thanks to Kiran for the sponsor to strive though a professional
            outcome. Good clients lead to a good project~!
          </p>
        </div>
        <div className="flex pt-[66px] items-center gap-[50px] justify-start ">
          <div className="flex items-center gap-5 -rotate-90 h-full">
            <p className="font-medium text-2xl">Film Making</p>
            <hr className="bg-primaryBlack w-[172px] h-[4px]" />
          </div>
          <div>
            <h2 className="font-normal text-[54px] mb-5">Cast</h2>
            <p className="font-normal text-[28px]">
              Direction and Camera: Akash Sekar
            </p>
            <p className="font-normal text-[28px]">
              Outfit: The Traditional Red
            </p>
            <p className="font-normal text-[28px]">Jewellery: Odhna</p>
            <p className="font-normal text-[28px]">Model: Mandeep Kaur</p>
            <p className="font-normal text-[28px]">
              Makeup: Rahul Kataria and Rohit
            </p>
            <p className="font-normal text-[28px]">Hair: Shikhar Verma</p>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="font-normal text-[54px] mb-10">Other Project</h2>
        </div>
      </Container>
    </section>
  );
};

export default AboutProject;
