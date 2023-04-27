import Container from "../ui/Container";
import { Link, useLocation } from "react-router-dom";

// Images
import TheIndianExpress from "../assets/img/TheIndianExpress.png";
import DtNext from "../assets/img/DtNext.png";
import LinkedInLogo from "../assets/img/LinkedInLogo.png";
import instagram from "../assets/img/instagram.png";
import WhiteLinkedInLogo from "../assets/img/WhiteLinkedInLogo.png";
import whiteinstagram from "../assets/img/whiteinstagram.png";
import Logo from "../assets/img/Logo.png";
import DarkLogo from "../assets/img/DarkLogo.png";

const Footer = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <footer
      className={`backdrop py-10 ${
        pathName === "/photography" ? "bg-darkColor" : "bg-white"
      }`}
    >
      <Container className="px-5">
        {pathName === "/" && (
          <div>
            <p className="text-center font-normal text-[32px] text-primaryBlack mb-5">
              Featured in
            </p>
            <div className="flex items-center justify-center gap-10 mb-10">
              <img
                src={TheIndianExpress}
                alt="The Indian Express"
                className="w-[300px] h-[60px]"
              />
              <img src={DtNext} alt="Dt Next" className="w-[234px] h-[65px]" />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src={pathName === "/photography" ? Logo : DarkLogo}
                alt="Logo"
                className={`w-[203px] h-[89px] ${
                  pathName === "/" ? "hidden" : ""
                }`}
              />
            </Link>

            <p
              className={`mt-5 ${
                pathName === "/photography" ? "text-white" : "text-primaryBlack"
              }`}
            >
              2021 Akash Sekar. All Rights Reserved.
            </p>
          </div>
          {pathName !== "/photography" ? (
            <div className="flex gap-[30px]">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                  className="w-[40px] h-[40px]"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-[40px] h-[40px]"
                />
              </a>
            </div>
          ) : (
            <div className="flex gap-[30px]">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WhiteLinkedInLogo}
                  alt="LinkedIn Logo"
                  className="w-[40px] h-[40px]"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whiteinstagram}
                  alt="Instagram"
                  className="w-[40px] h-[40px]"
                />
              </a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
