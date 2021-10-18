import { Fragment } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LogoutIcon, UserIcon } from "./icons";
import { Navbar } from ".";

const CustomLink = (props: any) => {
    const { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    )
}

const Header = () => {
    const { asPath, locale, locales, defaultLocale, } = useRouter();
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
                <div></div>
                <ul className="flex space-x-2 mr-2">
                    <Menu as="div" className="relative inline-block text-left">
                        {({ open }) => (
                            <>
                                <Menu.Button className="flex items-center justify-center px-2 h-9 bg-gray-200 text-primary rounded-lg uppercase">
                                    {locale}
                                    <ChevronDownIcon />
                                </Menu.Button>
                                <Transition
                                    show={open}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 w-16 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" static>
                                        {langsRoutes?.map(({ route, loc }) => (
                                            <div className="px-1 py-1" key={route}>
                                                <Menu.Item>
                                                    <CustomLink href={route} passHref locale={loc}>
                                                        <span className="mx-2 cursor-pointer uppercase">
                                                            {loc}
                                                        </span>
                                                    </CustomLink>
                                                </Menu.Item>
                                            </div>

                                        ))}
                                    </Menu.Items>
                                </Transition>

                            </>
                        )}
                    </Menu>
                    <button className="w-9 h-9 bg-gray-200 rounded-lg uppercase flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-primary" />
                    </button>
                    <button className="w-9 h-9 bg-gray-200 rounded-lg uppercase flex items-center justify-center"><LogoutIcon className="h-5 w-5 text-primary" /></button>


                </ul>
            </div>
            <div className="py-12 text-center text-5xl">
                <Link href="/">Árbore</Link>
            </div>
            <Navbar />
        </header>
    )
}

export default Header

