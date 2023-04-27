import Container from "../../ui/Container";
import Button from "../../ui/Button";
import ContactForm from "./ContactForm";

// Images
import BCard from "../../assets/img/Bcard.png";

const Contact = () => {
  return (
    <section className="backdrop h-[919px] bg-white text-primaryBlack">
      <Container className="py-20 px-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-[66px]">Say Vannakam! 🙏</h2>
          <p className="font-normal text-2xl mt-[27px]">
            Enter your collaboration details / feedback below and <br />
            I&apos;ll get back to you as soon as I can!
          </p>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={BCard}
            alt="Business Card"
            className="w-[399px] h-[470px]"
          />
          <Button className="font-normal bg-white py-5 px-12 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
            View My Resume
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
