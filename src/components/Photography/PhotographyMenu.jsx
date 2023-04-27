import { Link } from "react-router-dom";
import { photographyCategory } from "../../utils/photography";

// Images
import Logo from "../../assets/img/Logo.png";
import WhiteLinkedInLogo from "../../assets/img/WhiteLinkedInLogo.png";
import whiteinstagram from "../../assets/img/whiteinstagram.png";
import BoldWhiteArrowRight from "../../assets/img/boldarrow-right.png";

const PhotographyMenu = () => {
  return (
    <div className="bg-darkPhotographyBackground border-r border-r-borderColor blurBg p-[30px] text-white text-xl font-normal">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[203px] h-[89px]" />
      </Link>
      <ul className="mt-10 space-y-6">
        {photographyCategory.map((cat, i) => (
          <li
            key={i}
            className="cursor-pointer font-normal group flex items-center justify-between hover:font-bold"
          >
            {cat.cat}
            <img
              src={BoldWhiteArrowRight}
              alt="ArrowRight"
              className="w-[24px] h-[24px] hidden group-hover:block"
            />
          </li>
        ))}
      </ul>
      <div className="flex gap-5 mt-20">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img
            src={WhiteLinkedInLogo}
            alt="LinkedIn Logo"
            className="w-[32px] h-[32px]"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            src={whiteinstagram}
            alt="Instagram"
            className="w-[32px] h-[32px]"
          />
        </a>
        <p className="text-[22px]">/iamakashsekar</p>
      </div>
    </div>
  );
};

export default PhotographyMenu;
