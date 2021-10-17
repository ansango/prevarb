import { useRouter } from "next/router";
import Link from "next/link";
import { useI18n } from 'next-localization';
import { Navbar } from ".";

const Header = () => {
    const { t } = useI18n();
    const { asPath, locale, locales, defaultLocale } = useRouter();
    const langsRoutes = locales
        ?.map((loc: string) => {
            return {
                route: defaultLocale !== loc ? `/${loc}${asPath}` : asPath,
                loc,

            };
        })
        .filter(({ loc }) => loc !== locale);

    return (
        <header>
            <div className="flex justify-between bg-gray-200 py-3">
                <ul>
                    {langsRoutes?.map(({ route, loc }) => (
                        <Link key={route} href={route} locale={loc} passHref>
                            <span className="mx-2 cursor-pointer uppercase">
                                {loc}
                            </span>
                        </Link>
                    ))}
                </ul>
                <ul className="flex">
                    <li className="mx-4">{t('common.session.account')}</li>
                    <li className="mx-4 hidden">{t('common.session.login')}</li>
                    <li className="mx-4">{t('common.session.logout')}</li>
                </ul>

            </div>
            <div className="py-14 text-center bg-red-100">
            </div>
            <Navbar />
        </header>
    )
}

export default Header

