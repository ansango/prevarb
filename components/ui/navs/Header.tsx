import Link from "next/link";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import LangSelector from "./LangSelector";
import { LogoutIcon, UserIcon } from "../icons";
import Image from "next/image";
import Logo from "public/static/logos/arbore-primary.svg";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between md:justify-end bg-gray-100 py-3">
        <NavMobile />
        <ul className="flex space-x-2 mr-2">
          <LangSelector />
          <button className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserIcon className="h-5 w-5 text-primary" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <LogoutIcon className="h-5 w-5 text-primary" />
          </button>
        </ul>
      </div>
      <div className="py-10 px-40 md:py-12 text-center text-5xl">
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
