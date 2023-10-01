import bg from "public/assets/img/tools/login.jpg";
import Link from "next/link";

import logo from "public/assets/img/tools/logo.png";

import Image from "next/image";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div
          className="h-screen w-full brightness-[.60]"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        ></div>
        <div className="absolute left-1/2 -translate-x-1/2 md:transform-none top-0 md:left-10 lg:left-20 xl:left-22">
            <Image src={logo} width={130} height={70} alt="logo" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 xl:w-1/4 h-2/3 p-16 text-white bg-black/80 rounded-md">
          <h1 className="text-4xl mb-8 font-semibold">Login</h1>
          <div className="flex flex-col text-neutral-600">
            <input
              type="text"
              className="rounded-md p-2 pl-4 h-14 bg-neutral-800 w-full mb-4 focus:border-redflix"
              placeholder="Enter email address"
              disabled
            />
            <input
              type="text"
              className="rounded-md pl-4 h-14 bg-neutral-800 w-full mb-8 focus:border-redflix"
              placeholder="Enter password"
              disabled
            />
            <button
              className="rounded-md text-white text-md bg-redflix/90 font-semibold w-full h-12 mb-2 text-center"
              disabled
            >
              Login
            </button>
            <button className="rounded-md text-white text-md bg-redflix/90 font-semibold w-full h-12 mb-2 text-center hover:bg-redflix/80">
              Login as test user
            </button>
            <div className="mb-8 w-full">
              <div className="text-neutral-500 font-normal">
                <input type="checkbox" className="accent-neutral-800" checked />
                <label className="ml-2">Remember me</label>
                <a className="float-right">Forgot password</a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-black/80">
          <div className="flex gap-10 text-neutral-500 font-normal">
            <Link href="/">Main</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/series">Series</Link>
          </div>
        </div>
      </div>
    </>
  );
}
