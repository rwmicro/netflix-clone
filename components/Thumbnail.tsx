import Link from "next/link";
import Image from "next/image";

import play from "../public/assets/img/tools/media.png";
import downarrow from "../public/assets/img/tools/down-arrow.png";

var posterFilm = "https://image.tmdb.org/t/p/w500";

export default function Thumbnail({ Medium }) {
  return (
    <>
      <Link
        href={{
          pathname: "/watch/[watch]",
          query: { watch: Medium.id.toString() },
        }}
        className="h-fit w-fit cursor-pointer z-100"
      >
        <Image
          src={posterFilm + Medium.backdrop_path}
          className="h-40 w-72 rounded-t-md shadow-md"
          width={600}
          height={300}
          alt={Medium.title}
        />
        <div
          className="hidden p-3 shadow-xl rounded-b-md w-full"
          style={{ backgroundColor: "#141414" }}
        >
          <div className="flex justify-between">
            <Link href='/'>
            <Image
              src={play}
              className="h-8 w-8 p-1 bg-white rounded-full "
              width={40}
              height={40}
              alt="play"
            />
            </Link>
            <Link href='/' className="p-1.5 bg-zinc-800 border-2 border-zinc-600 rounded-full">
              <Image
                src={downarrow}
                className="h-5 w-5"
                width={40}
                height={40}
                alt="play"
              />
            </Link>
          </div>
          <p className="text-sm font-semibold">{Medium["media_type"]}</p>
          <h1 className="text-xl font-semibold">{Medium["title"]}</h1>
          <div className="flex align-middle gap-2 text-xs">
            <p className="text-green-500">
              Recommended at {Medium["vote_average"] * 10}%
            </p>
            <span className="uppercase">{Medium["original_language"]}</span>
            <span>{Medium["release_date"].split("-", 1)}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
