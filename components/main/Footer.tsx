import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/img/tools/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-52 text-white">
        <div className="w-11/12 ml-20 relative flex flex-col justify-between h-full">
          <div className="flex flex-col ">
            <Image alt="logo_footer" src={Logo} className="w-44 -ml-4 z-0" />
            <div className="text-white/40 font-thin text-sm flex gap-5">
              <Link scroll={true} className='hover:text-white/30' href="/">Accueil</Link>
              <Link scroll={true} href="/movies" className='hover:text-white/30'>Films</Link>
              <Link scroll={true} href="/series"  className='hover:text-white/30'>Series</Link>
            </div>
          </div>
          <h5 className="text-sm text-white/60 font-semibold mb-3 text-center">
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
