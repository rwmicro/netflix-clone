"use client";
import Image from "next/image";
import Link from "next/link";
import profilesJSON from "../public/assets/json/profiles/profiles.json";
import logo from "../public/assets/img/tools/logo.png";
import logoN from "../public/assets/img/tools/N.png";

import { useCookies } from "next-client-cookies";
// import cookieCutter from "@boiseitguru/cookie-cutter";
import Head from "next/head";

export default function Browse() {
  const cookies = useCookies();
  const isProfile = cookies.get("profile");

  if (isProfile) {
    window.location.href = "/home";
  }

  function setProfileImage(id: number) {
    const image = profilesJSON[id].imagePath;

    fetch(image)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch failed with status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result.toString();
          cookies.set("profile", base64Data);
          window.location.href = "/home";
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error setting profile image:", error);
      });
  }

  return (
    <>
      <Head>
        <title>Netflix - Profiles</title>
      </Head>
      <div className="min-h-screen w-full">
        <div className="w-full z-[998] absolute top-0 flex items-center">
          <div className="flex justify-around items-center sm:justify-between h-fit w-full">
            <div className="flex items-center relative md:left-10 lg:left-20 xl:left-22">
              <Link href="/home" className="w-fit h-fit hidden sm:block">
                <Image src={logo} width={130} height={70} alt="logo" />
              </Link>
              <Link href="/home" className="sm:hidden">
                <Image src={logoN} width={18} height={50} alt="logoN" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-3xl xl:text-6xl font-semibold text-white mb-5 xl:mb-10">
            Who are you ?
          </h1>
          <div className="flex gap-5">
            {profilesJSON.map((profile) => (
              <div
                className="flex flex-col items-center text-neutral-500 hover:text-white"
                key={profile.id}
              >
                <Image
                  alt={profile.name}
                  width={250}
                  height={250}
                  src={profile.imagePath}
                  className="rounded-md xl:w-44 w-24 border-2 border-transparent hover:border-white"
                  onClick={() => setProfileImage(profile.id)}
                />
                <h1 className="mt-3 text-md xl:text-2xl font-normal">
                  {profile.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
