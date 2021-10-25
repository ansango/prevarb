import Link from "next/link";
import { useI18n } from "next-localization";
import { FBIcon, IGIcon, TWIcon, YTIcon } from "../icons";

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="pt-10 pb-10">
        <ul className="flex justify-center pb-3">
          <li className="w-8 h-8  text-xl">
            <FBIcon />
          </li>
          <li className="w-8 h-8  text-xl">
            <TWIcon />
          </li>
          <li className="w-8 h-8  text-xl">
            <IGIcon />
          </li>
          <li className="w-8 h-8  text-xl">
            <YTIcon />
          </li>
        </ul>
        <div className="flex justify-center text-center">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            <li>Nosotros</li>
            <li>Dónde estamos</li>
            <li>Condiciones Generales</li>
            <li>Ley de protección de datos</li>
          </ul>
        </div>
      </div>
      <div className="bg-primary text-white" aria-labelledby="footer-heading">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="text-white xl:col-span-1">
              <Link href="/" passHref>
                <span className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                  Árbore
                </span>
              </Link>
              <p className="w-1/2 mt-2 text-sm">Consumo Consciente</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-bold tracking-wider uppercase underline">
                    {t("common.footer.menu.title")}
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    {Object.entries(t("common.footer.menu.links")).map(([key, value]) => {
                      return (
                        <li className="hover:underline" key={key}>
                          <Link href={`/${key}`}>
                            <a>{value}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold tracking-wider uppercase underline">
                    {t("common.footer.usefulLinks.title")}
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    {Object.entries(t("common.footer.usefulLinks.links")).map(([key, value]) => {
                      return (
                        <li className="hover:underline" key={key}>
                          <Link href={`/${key}`}>
                            <a>{value}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 mx-auto bg-gray-200 max-w-7xl sm:px-6 lg:px-16">
          <div className="flex flex-wrap items-baseline">
            <span className="mt-2 text-sm font-light text-gray-500">
              Copyright © {currentYear}
              <a
                href="http://arbore.org"
                className="mx-2 text-wickedblue hover:text-gray-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                arbore
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
