import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/img/tools/logo.png";
import Arrow from "public/assets/img/tools/top-arrow-white.png";

export default function Footer() {
  return (
    <footer className="w-full h-52 text-white">
      <div className="w-11/12 ml-20 relative flex flex-col gap-5">
        <div className="flex justify-between w-full flex-col sm:flex-row">
          <Image alt="logo_footer" src={Logo} className="w-44 -ml-4" />
          <Link href="#" className="mt-10">
            <Image src={Arrow} className="h-7 w-8" alt="Top arrow" />
          </Link>
        </div>
        <div className="flex justify-between sm:items-end flex-col sm:flex-row">
          <div className="font-semibold flex flex-col">
            <Link href="/">Accueil</Link>
            <Link href="/movies">Films</Link>
            <Link href="/series">Series</Link>
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
