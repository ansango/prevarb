import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "../icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";

const LangSelector = () => {
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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center px-2 h-9 text-primary bg-gray-300 bg-opacity-30 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase">
          {locale}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-0 w-16 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {langsRoutes?.map(({ route, loc }) => (
            <Link href={route} locale={loc} passHref key={route}>
              <div className="px-1 py-1">
                <Menu.Item>
                  <span className="mx-2 cursor-pointer uppercase">{loc}</span>
                </Menu.Item>
              </div>
            </Link>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangSelector;
