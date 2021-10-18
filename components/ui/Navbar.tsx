import Link from 'next/link';
import { useI18n } from 'next-localization';
const Navbar = () => {
  const { t } = useI18n();
  return (

    <nav className="hidden md:block bg-primary text-white py-3">
      <ul className="flex items-center justify-center">
        {Object.entries(t('common.nav')).map(([key, value]) => {
          return (
            <li className="mx-2 lg:mx-6 xl:mx-8 hover:underline" key={key}>
              <Link href={`/${key}`}>
                <a>{value}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
