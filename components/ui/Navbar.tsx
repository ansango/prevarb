import Link from 'next/link';
import { useI18n } from 'next-localization';
import { MenuIcon, XIcon } from './icons';
import { useEffect, useState } from 'react';

const MobileNavbar = () => {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    }
  }, []);
  return <div className="md:hidden ml-2">
    <button className="w-9 h-9 bg-gray-200 flex items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" onClick={toggleMenu}>
      {isMenuOpen && <XIcon />}
      {!isMenuOpen && <MenuIcon />}
    </button>
    <div
      className={`fixed w-full h-full top-24 right-0 bg-gray-50 dark:bg-gray-900 opacity-95 z-10 transform ease-in-out duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
          {Object.entries(t('common.nav')).map(([key, value]) => {
            if (key === 'home') {
              return (
                <li className="mx-5 p-4 text-xl hover:underline" key={key}>
                  <Link href={`/`}>
                    <a>{value}</a>
                  </Link>
                </li>
              );
            }
            return (
              <li className="mx-5 p-4 text-xl hover:underline" key={key}>
                <Link href={`/${key}`}>
                  <a>{value}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  </div>;
};


const Navbar = () => {
  const { t } = useI18n();
  return (
    <nav className="hidden md:block bg-primary text-white py-3">
      <ul className="flex items-center justify-center">
        {Object.entries(t('common.nav')).map(([key, value]) => {
          if (key !== 'home') {
            return (
              <li className="mx-2 lg:mx-6 xl:mx-8 hover:underline" key={key}>
                <Link href={`/${key}`}>
                  <a>{value}</a>
                </Link>
              </li>
            );
          } else {
            return (
              <span className="hidden" key={key}></span>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export { Navbar, MobileNavbar };
