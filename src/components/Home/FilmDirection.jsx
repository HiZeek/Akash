import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

const FilmDirection = () => {
  return (
    <section className="backdrop bg-white text-primaryBlack">
      <Container className="py-20 px-5">
        <div className="flex items-center justify-between">
          <h2 className="font-normal text-[66px]">
            Film
            <br />
            Direction
          </h2>
          <Button className="font-normal bg-white py-5 px-8 drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
            <Link to="/film-direction">Click to Discover</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FilmDirection;
