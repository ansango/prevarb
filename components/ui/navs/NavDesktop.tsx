import Link from 'next/link';
import { useI18n } from 'next-localization';

const NavDesktop = () => {
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

export default NavDesktop;
