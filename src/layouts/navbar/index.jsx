import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ReactDropdown from "react-dropdown";
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/customs/ImagesCustoms";
import CheckBoxCustoms from "../../components/ui/chechboxDark";


/// Images
import { RuSVG, UzSVG } from "../../assets";

import "./style.scss";

const getContent = (title, img) => {
  return (
    <Fragment>
      <div className="image">
        <LazyImage src={img} alt="svg" effect={undefined} />
      </div>
      <span>{title}</span>
    </Fragment>
  );
};
const options = [
  { value: "ru", label: getContent("ru", RuSVG) },
  { value: "uz", label: getContent("uz", UzSVG) },
];

const navigation = [
  { name: "Kurslar", href: "/", current: true },
  { name: "Ochiq darslar", href: "#", current: false },
  { name: "Kovorking zonasi", href: "#", current: false },
  { name: "Biz haqimizda", href: "#", current: false },
  { name: "Kontakt", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarCustoms() {
  const {
    i18n: { language, changeLanguage },
    t,
  } = useTranslation();
  return (
    <Disclosure as="nav" className="dark:bg-black bg-blackColor">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex items-center text-white logo__adap">
                  {/*  CheckBoxCustoms == Dark Mode */}
                  <CheckBoxCustoms />
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center justify-center w-full">
                  <ul className="flex space-x-10">
                    <li>
                      <a className="text-white hover:text-red-400" href="#">
                        {t(`nav.kurs`)}
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-red-400" href="#">
                        {t(`nav.freecorse`)}
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-red-400" href="#">
                        {t(`nav.kovorking`)}
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-red-400" href="#">
                        {t(`nav.about`)}
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-red-400" href="#">
                        {t(`nav.contact`)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*  react down == Langue */}
                <ReactDropdown
                  options={options}
                  value={language}
                  onChange={(val) => changeLanguage(val.value)}
                />
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="text-white">998 90 999 99 99</div>
                </Menu>



              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <ul>
                <li>
                  <button className="bg-gray-900 text-white">Kurslar</button>
                </li>
              </ul>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : " text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
