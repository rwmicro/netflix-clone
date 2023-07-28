import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/img/tools/logo.png";

var actualYear = new Date().getFullYear();

const Footer = () => {
  function retourtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="w-full bg-zinc-900 text-white">
      <div className="ml-20 relative mb-5">
        <div>
          <Image alt="logo_footer" src={Logo} className="w-44 -ml-4" />
          <ul className="font-bold">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
            <li>
              <Link href="/series">Series</Link>
            </li>
            <li>
              <Link href="/login">Connexion</Link>
            </li>
          </ul>
        </div>
        <div className="absolute right-10 top-28">
          <p className="text-zinc-800 text-5xl flex gap-1">
            <span className="fab fa-cc-visa" aria-hidden="true"></span>
            <span className="fab fa-cc-mastercard" aria-hidden="true"></span>
            <span className="fab fa-bitcoin" aria-hidden="true"></span>
            <span className="fab fa-cc-amex" aria-hidden="true"></span>
            <span className="fa-brands fa-ethereum"></span>
            <span className="fab fa-cc-paypal" aria-hidden="true"></span>
          </p>
        </div>
      </div>

      <h5 className="text-sm text-center pb-2 text-white font-bold">
        Netflix Clone © 2020 - {actualYear} - Martin Rigaux all rights reserved.
      </h5>
    </footer>
  );
};
export default Footer;
