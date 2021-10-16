import { useRouter } from "next/router";
import Link from "next/link";
import { useI18n } from 'next-localization';

const Header = () => {
    const { t } = useI18n();
    const tt = t('title')
    console.log(tt)

    const { asPath, locale, locales, defaultLocale } = useRouter();

    const langsRoutes = locales
        ?.map((loc: string) => {
            console.log();



            return {
                route: defaultLocale !== loc ? `/${loc}${asPath}` : asPath,
                loc,

            };
        })
        .filter(({ loc }) => loc !== locale);

    return (
        <header>
            <ul className="flex justify-end bg-gray-200 py-2">
                <li className="mx-4">Mi cuenta</li>
                <li className="mx-4">Cerrar Sesion</li>
                {langsRoutes?.map(({ route, loc }) => (
                    <Link key={route} href={route} locale={loc}>
                        <span className="mx-2">
                            {loc}
                        </span>
                    </Link>
                ))}
            </ul>
            <div className="py-4 text-center">
                <p className="text-4xl">Árbore</p>
                <span className="uppercase" style={{ fontSize: "0.75rem" }}>Consumo Consciente</span>
            </div>
        </header>
    )
}

export default Header

