import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/img/tools/logo.png";
import { useEffect } from "react";

export default function Footer() {


  return (
    <>
      <footer className="w-full h-52 text-white">
        <div className="w-11/12 ml-20 relative flex flex-col">
          <div className="flex justify-between w-full flex-col sm:flex-row">
            <Image alt="logo_footer" src={Logo} className="w-44 -ml-4" />
            <div className="text-white/40 font-thin text-sm flex flex-col">
              <Link href="/">Accueil</Link>
              <Link href="/movies">Films</Link>
              <Link href="/series">Series</Link>
            </div>
          </div>
          <h5 className="text-sm text-white/60 font-semibold">
            Netflix Clone © 2023 -{" "}
            <Link
              href="http://www.nebula.li"
              target="_blank"
              className="text-white/80"
            >
              Nebula.li
            </Link>{" "}
            - all rights reserved.
          </h5>
        </div>
      </footer>
    </>
  );
}
