import Link from "next/link";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import LangSelector from "./LangSelector";
import Image from "next/image";
import Logo from "public/static/logos/arbore-primary.svg";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between md:justify-end bg-gray-200 py-3">
        <NavMobile />
        <ul className="flex space-x-2 mr-2">
          <LangSelector />
        </ul>
      </div>
      <div className="py-10 px-20 md:py-12 md:px-40 text-center text-5xl">
        <Link href="/" passHref>
          <a>
            <Image src={Logo} alt="arbore" className="cursor-pointer" />
          </a>
        </Link>
      </div>
      <NavDesktop />
    </header>
  );
};

export default Header;
