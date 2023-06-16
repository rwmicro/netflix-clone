import Link from "next/link";
import Image from "next/image";
import user_pic from "public/assets/img/tools/profile.webp";
import logo from "public/assets/img/tools/logo_netflix.png";
export default function Header() {
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />;

  return (
    <>
      <header className="float-left h-10 w-full">
        <div className="mt-5 flex justify-between">
          <Image
            src={logo}
            width={150}
            height={50}
            alt="logo"
            className="ml-20"
          />
          <ul className="ml-96 mt-7">
            <li className="inline-block">
              <Link
                href=""
                className="text-white font-opensans text-2xl font-normal mr-20"
              >
                Home
              </Link>
            </li>
            <li className="inline-block">
              <a
                href=""
                className="font-opensans text-2xl font-normal text-white mr-20"
              >
                Movies
              </a>
            </li>
            <li className="inline-block">
              <Link
                href=""
                className="font-opensans text-2xl font-normal text-white mr-20"
              >
                Series
              </Link>
            </li>
          </ul>
          <Link href="">
            <span className="material-symbols-outlined">search</span>
            <Image
              src="/public/assets/img/tools/logo_netfilx.png"
              width={50}
              height={50}
              alt="search"
            />
          </Link>
          <Link
            href=""
            className="border-redflix border-2 mr-20 rounded-full w-14 h-14 mt-4"
          >
            <Image
              src={user_pic}
              alt="user"
              className="rounded-full w-full h-full"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
