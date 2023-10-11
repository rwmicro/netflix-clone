import Header from "../components/main/Header";
import Search from "../components/index/Search";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Main page of the Netflix Clone app made by Nebula Company.",
};
export default function Accueil() {
  return (
    <>
      <div className="hidden sm:block w-full h-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 bg-[url('/assets/img/tools/index.jpg')]">
        <Header />
        <Search />
      </div>
      <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
          Please view this site on a computer
        </p>
      </div>
    </>
  );
}
