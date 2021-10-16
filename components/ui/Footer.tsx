import Link from 'next/link';
import { siteMetadata } from "lib/siteMetadata";
import { useI18n } from 'next-localization';
const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-green-600 text-white py-10">

      <div className="flex px-40">
        <nav className="w-1/3">
          <p className="uppercase">{(t('common.footer.menu.title'))}</p>
          <ul className="">
            {Object.entries(t('common.footer.menu.links')).map(([key, value]) => {
              return (
                <li className="hover:underline" key={key}>
                  <Link href={`/${key}`}>
                    <a>{value}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="w-1/3">
          <ul className="">
            <p className="uppercase">{(t('common.footer.usefulLinks.title'))}</p>
            {Object.entries(t('common.footer.usefulLinks.links')).map(([key, value]) => {
              return (
                <li className="hover:underline" key={key}>
                  <Link href={`/${key}`}>
                    <a>{value}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="w-1/3">
          <p className="uppercase">{(t('common.footer.contact.title'))}</p>
          <ul className="">
            {Object.entries(t('common.footer.contact.links')).map(([key, value]) => {
              return (
                <li className="hover:underline" key={key}>
                  <Link href={`/${key}`}>
                    <a>{value}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="text-center">
        <span>{siteMetadata.author}</span>
        <span> - </span>
        <span>{currentYear}©️</span>
      </div>
    </footer>
  );
};

export default Footer;
