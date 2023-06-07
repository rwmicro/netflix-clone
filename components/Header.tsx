import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../public/assets/img/tools/logo.png";

export default function Header() {
  const url = useRouter();
  return (
    <>
      <header className={url.pathname === "/" ? "float-left" : "header"}>
        <div className="relative pt-10">
          <Link href="/" className="block w-40">
            <img src="/assets/img/tools/logo.png" alt="logo" />
          </Link>
          <nav className="flex gap-36 ml-20">
            <Link href="/" className=" w-8">
              <img src="/assets/img/tools/logo-maison.png" alt="Accueil" />
              Accueil
            </Link>
            <Link href="/Films" className="">
              <img
                src="/assets/img/tools/logo-film.png"
                alt="Films"
                className="w-8"
              ></img>
              Films
            </Link>
            <Link href="/Series" legacyBehavior>
              <a>
                <img
                  src="/assets/img/tools/logo-serie.png"
                  alt="Series"
                  className="w-8"
                ></img>
                Series
              </a>
            </Link>
          </nav>
          <Link
            href="/Login"
            className="absolute right-10 text-white p-3 rounded-md text- bg-red-600"
          >
            S'identifier
          </Link>
        </div>
      </header>
    </>
  );
}
