import Link from 'next/link';
import { siteMetadata } from "lib/siteMetadata";
import { useI18n } from 'next-localization';
const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="">
      <div>
        <ul>
          <li className="w-8 h-8 text-green-600">

          </li>
          <li>

          </li>
        </ul>
      </div>
      <div className="flex justify-center py-5 text-center">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <li>Nosotros</li>
          <li>Dónde estamos</li>
          <li>Condiciones Generales</li>
          <li>Ley de protección de datos</li>
        </ul>
      </div>
      <div className="bg-green-600 text-white p-10">
        <div className="flex justify-center pb-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10">
            <nav>
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
            <nav>
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
            <nav>
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

        </div>
        <div className="text-center">
          <span>{siteMetadata.author}</span>
          <span> - </span>
          <span>{currentYear}©️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
