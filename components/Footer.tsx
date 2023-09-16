import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/img/tools/logo.png";
import Arrow from "public/assets/img/tools/top-arrow-white.png";

export default function Footer() {
  return (
    <footer className="w-full text-white">
      <div className="ml-20 relative mb-3 flex">
        <div>
          <Image alt="logo_footer" src={Logo} className="w-44 -ml-4" />
          <div className="font-semibold flex flex-col">
              <Link href="/">Accueil</Link>
              <Link href="/movies">Films</Link>
              <Link href="/series">Series</Link>
          </div>
        </div>
        <h5 className="text-sm text-white/60 font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">
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
        <Link href="#" className="absolute bottom-28 right-14">
          <Image src={Arrow} className="h-7 w-8" alt="Top arrow" />
        </Link>
        <div className="absolute right-14 top-28">
          <p className="text-neutral-800 text-5xl flex gap-1">
            <span className="fab fa-cc-visa" aria-hidden="true"></span>
            <span className="fab fa-cc-mastercard" aria-hidden="true"></span>
            <span className="fab fa-bitcoin" aria-hidden="true"></span>
            <span className="fab fa-cc-amex" aria-hidden="true"></span>
            <span className="fa-brands fa-ethereum"></span>
            <span className="fab fa-cc-paypal" aria-hidden="true"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
