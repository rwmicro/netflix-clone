import Header from "../../components/main/Header";
import Search from "../../components/index/Search";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Main page of the Netflix Clone app made by Nebula Company.",
};
export default function Accueil() {
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0">
        <Image
          src="/assets/img/tools/index.jpg"
          alt="background"
          className="object-center object-cover pointer-events-none"
          quality={100}
          fill
        />
        <Header />
        <Search />
      </div>
    </>
  );
}
