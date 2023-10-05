"use client"

import Link from "next/link";
import Image from "next/image";
import user_pic from "public/assets/img/tools/frog.png";
import logo from "public/assets/img/tools/logo.png";
import logoN from "public/assets/img/tools/N.png";
import { usePathname } from 'next/navigation'

import search_image from "public/assets/img/tools/search.svg";

import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function scrollFunction() {
  if (document.getElementById("header")) {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      document.getElementById("header").style.position = "fixed";
      document.getElementById("header").style.top = "0px";
      document.getElementById("header").style.transition = "all 0.5s ease";
      document.getElementById("header").style.backgroundColor = "#141414";
    } else {
      document.getElementById("header").style.position = "absolute";
      document.getElementById("header").style.transition = "all 0.5s ease";
      document.getElementById("header").style.backgroundColor = "";
    }
  }
}

export default function Header() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const pathname = usePathname()

  return (
    <>
      <header
        id="header"
        className="w-full z-[998] absolute top-0 flex items-center"
      >
        <div className="flex justify-around items-center sm:justify-between h-fit w-full">
          <div className="flex items-center relative md:left-10 lg:left-20 xl:left-22">
            <Link href="/" className="w-fit h-fit hidden sm:block">
              <Image src={logo} width={130} height={70} alt="logo" />
            </Link>
            <Link href="/" className="sm:hidden">
              <Image src={logoN} width={18} height={50} alt="logoN" />
            </Link>
            <div className="ml-10 flex gap-5 text-white text-sm">
              <Link
                className={
                  pathname == "/"
                    ? "underline underline-offset-8 decoration-redflix"
                    : ""
                }
                href="/"
              >
                Home
              </Link>
              <Link
                className={
                  pathname == "/movies"
                    ? "underline underline-offset-8 decoration-redflix"
                    : ""
                }
                href="/movies"
              >
                Movies
              </Link>
              <Link
                className={
                  pathname == "/series"
                    ? "underline underline-offset-8 decoration-redflix"
                    : ""
                }
                href="/series"
              >
                Series
              </Link>
            </div>
          </div>
          <div className="flex gap-12 align-middle justify-center mt-3.5 sm:mr-24">
            <Link className="w-5 h-5 mt-2 hidden" href="">
              <Image
                src={search_image}
                className="w-full h-full"
                alt="search"
              />
            </Link>

            <Menu as="div" className="relative inline-block text-left w-6">
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
                          href="/"
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
                          href="/"
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
