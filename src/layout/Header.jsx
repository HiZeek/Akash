import Container from "../ui/Container";
import { useState } from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { menuLink } from "../utils/menuLink";

// Images
import Logo from "../assets/img/Logo.png";
import CloseMenu from "../assets/img/close-circle.png";
import WhiteLinkedInLogo from "../assets/img/WhiteLinkedInLogo.png";
import whiteinstagram from "../assets/img/whiteinstagram.png";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  function handleDisplayMenu() {
    setDisplayMenu(true);
  }

  function handleHideMenu() {
    setDisplayMenu(false);
  }

  return (
    <header className="bg-darkColor text-white relative">
      <Container className="px-5 py-5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[92px] h-10 md:w-[203px] md:h-[89px]"
            />
          </Link>
          <Button
            onClick={handleDisplayMenu}
            className="text-white border-2 py-[15px] px-7 md:py-5 md:px-[38px] border-white text-sm md:text-2xl"
          >
            Menu
          </Button>
        </div>
        <div
          className={`bg-buttonDark blurBg p-[50px] fixed z-50 top-0 right-0 h-screen w-full md:w-[724px] transform transition-transform ${
            displayMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <Button className="text-white border font-normal py-4 px-[22px] md:py-5 md:px-[67px] borderGradient text-lg md:text-2xl">
              View My Resume
            </Button>
            <img
              src={CloseMenu}
              alt="ArrowRight"
              className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] cursor-pointer"
              onClick={handleHideMenu}
            />
          </div>
          <ul className="mt-20 space-y-6">
            {menuLink.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer font-normal text-[19px] md:text-4xl hover:text-[44px]"
              >
                <Link to={item.url}>{item.link}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-[60px]">
            <p className="font-normal text-2xl md:text-[44px]">Contact</p>
            <div className="flex gap-5 mt-20">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WhiteLinkedInLogo}
                  alt="LinkedIn Logo"
                  className="w-[32px] h-[32px]"
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
                  className="w-[32px] h-[32px]"
                />
              </a>
              <p className="text-lg md:text-[22px]">/iamakashsekar</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
