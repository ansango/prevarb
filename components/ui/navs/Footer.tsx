import Link from "next/link";
import { useI18n } from "next-localization";
import { FBIcon, IGIcon } from "../icons";
import Image from "next/image";
import xunta from "public/static/images/colaboradores/xunta.png";
const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
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
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase underline">Social</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li className="hover:underline">
                    <a
                      href="https://www.facebook.com/arborecooperativa"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      Facebook
                      <FBIcon className="ml-2" />
                    </a>
                  </li>
                  <li className="hover:underline">
                    <a
                      href="https://www.instagram.com/arborecooperativa/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      Instagram
                      <IGIcon className="ml-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 mx-auto md:flex md:flex-row-reverse justify-between items-center bg-gray-200 max-w-7xl sm:px-6 lg:px-16">
        <div className="md:flex flex-col items-end">
          <span className="text-xs font-light text-gray-500">PROXECTO COFINANCIADO</span>
          <div className="w-32">
            <Image src={xunta} alt="xunta" layout="intrinsic" />
          </div>
          <span className="text-xs font-light text-gray-500 max-w-xs text-right">
            Implantación e pulo da estratexia dixital e modernización do sector comercial e
            artesanal (CO300C 2021)
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-center md:justify-start">
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
    </footer>
  );
};

export default Footer;
