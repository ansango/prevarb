import { useRouter } from "next/router";
import Link from "next/link";
import { Navbar } from ".";
import { LogoutIcon, UserIcon } from "./icons";

const Header = () => {

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
            <div className="flex justify-between bg-gray-100 py-3">

                <ul>
                    {langsRoutes?.map(({ route, loc }) => (
                        <Link key={route} href={route} locale={loc} passHref>
                            <span className="mx-2 cursor-pointer uppercase">
                                {loc}
                            </span>
                        </Link>
                    ))}
                </ul>
                <ul className="flex space-x-2 mr-2">
                    <button className="w-9 h-9 bg-gray-200 rounded-lg uppercase flex items-center justify-center">{locale}</button>
                    <button className="w-9 h-9 bg-gray-200 rounded-lg uppercase flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-primary" />
                    </button>
                    <button className="w-9 h-9 bg-gray-200 rounded-lg uppercase flex items-center justify-center"><LogoutIcon className="h-5 w-5 text-primary" /></button>


                </ul>

            </div>
            <div className="py-12 text-center text-5xl">
                <p>Árbore</p>
            </div>
            <Navbar />
        </header>
    )
}

export default Header

