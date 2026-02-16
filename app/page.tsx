"use client";
import Image from "next/image";
import profilesJSON from "../public/assets/json/profiles/profiles.json";
import logo from "../public/assets/img/tools/logo.png";
import logoN from "../public/assets/img/tools/N.png";
import { useRouter } from "next/navigation";

export default function Profiles() {
  const router = useRouter();
  const setProfileImage = async (id: number) => {
    const image = profilesJSON[id].imagePath;

    try {
      const response = await fetch(image);
      if (!response.ok) {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result?.toString();
        if (base64Data) {
          window.sessionStorage.setItem("profile", base64Data);
          router.push("/home");
        }
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error setting profile image:", error);
    }
  };

  return (
    <>
      <title>Profiles - Netflix</title>
      <div className="min-h-screen w-full">
        <div className="flex justify-around items-center sm:justify-between">
          <Image
            src={logo}
            width={130}
            height={70}
            className="hidden sm:block ml-10"
            alt="logo"
          />
          <Image
            src={logoN}
            width={18}
            height={50}
            className="sm:hidden pt-5"
            alt="logoN"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold text-white mb-5 xl:mb-10">
            Who are you ?
          </h1>
          <div className="flex gap-5">
            {profilesJSON.map((profile) => (
              <div
                className="flex flex-col items-center text-neutral-500 hover:text-white cursor-pointer"
                key={profile.id}
                onClick={() => setProfileImage(profile.id)}
              >
                <Image
                  alt={profile.name}
                  width={250}
                  height={250}
                  src={profile.imagePath}
                  className="rounded-md xl:w-44 w-24 border-2 border-transparent hover:border-white"
                />
                <h1 className="mt-1 xl:mt-3 text-md xl:text-2xl font-normal">
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
