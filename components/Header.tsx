import Link from "next/link";
import NavLink from "next/link";
import Image from "next/image";
import user_pic from "public/assets/img/tools/frog.png";
import logo from "public/assets/img/tools/logo_netflix.png";
import search_image from "public/assets/img/tools/search.svg";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="float-left h-10 w-full">
        <div className="mt-5 flex justify-between">
          <Image
            src={logo}
            width={150}
            height={50}
            alt="logo"
            className="ml-20"
          />
          <ul className="ml-82 mt-8">
            <li className="inline-block">
              <Link
                className={
                  router.pathname == "/"
                    ? "text-white text-2xl font-bold mr-20 border-b border-redflix "
                    : "text-white text-2xl font-bold mr-20"
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className={
                  router.pathname == "/movies"
                    ? "text-white text-2xl font-bold mr-20 border-b border-redflix"
                    : "text-white text-2xl font-bold mr-20"
                }
                href="/movies"
              >
                Movies
              </Link>
            </li>
            <li className="inline-block">
              <Link
                className={
                  router.pathname == "/series"
                    ? "text-white text-2xl font-bold mr-20 border-b border-redflix"
                    : "text-white text-2xl font-bold mr-20"
                }
                href="/series"
              >
                Series
              </Link>
            </li>
          </ul>
          <div className="flex  mt-8 mr-24 w-42">
            <Link className="w-7 mr-12 -mt-2" href="">
              <Image
                src={search_image}
                className="w-full h-full"
                alt="search"
              />
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex">
                  <Image
                    src={user_pic}
                    alt="user"
                    className="rounded-lg w-full h-full"
                  />
                  <ChevronDownIcon
                    className="ml-1 mt-2 h-8 w-8 text-white"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 bg-white rounded-lg">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          My Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}
