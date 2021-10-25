import { useI18n } from "next-localization";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "../icons";
import Link from "next/link";

const NavMobile = () => {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="md:hidden ml-2">
      <button
        className="w-9 h-9 bg-gray-200 flex items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        onClick={toggleMenu}
      >
        {isMenuOpen && <XIcon />}
        {!isMenuOpen && <MenuIcon />}
      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-50 dark:bg-gray-900 opacity-95 z-10 transform ease-in-out duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={toggleMenu}
        ></button>
        <nav className="fixed h-full w-full mt-8">
          <ul className="flex flex-col items-end">
            {Object.entries(t("common.nav")).map(([key, value]) => {
              if (key === "home") {
                return (
                  <li className="mx-5 p-4 text-xl hover:underline" key={key}>
                    <Link href={`/`}>
                      <a>{value}</a>
                    </Link>
                  </li>
                );
              } else if (key === "store") {
                return (
                  <li key={key}>
                    <a
                      className="mx-5 p-4 text-xl hover:underline"
                      href="http://enbioverde.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {value}
                    </a>
                  </li>
                );
              } else if (key === "blog") {
                return <span className="hidden" key={key}></span>;
              } else {
                return (
                  <li className="mx-5 p-4 text-xl hover:underline" key={key}>
                    <Link href={`/${key}`}>
                      <a>{value}</a>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavMobile;
