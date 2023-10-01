import Link from "next/link";
import Image from "next/image";

import play from "public/assets/img/tools/media.png";
import downarrow from "public/assets/img/tools/down-arrow.png";

var posterFilm = "https://image.tmdb.org/t/p/w500";

export default function Thumbnail({ Medium }) {
  return (
    <>
      <Link
        href={{
          pathname: "/watch/[watch]",
          query: { watch: Medium.id.toString() },
        }}
        className="slide h-fit w-fit cursor-pointer z-100 rounded-sm overflow-hidden hover:overflow-visible">
        <Image
          src={posterFilm + Medium.backdrop_path || undefined}
          className="h-32 w-64 2xl:h-40 2xl:w-72 shadow-md rounded-t-sm"
          width={600}
          height={300}
          alt={Medium.title}
        />
        <div
          className="hidden p-3 shadow-xl rounded-b-md w-full z-[500]"
          style={{ backgroundColor: "#141414" }}
        >
          <div className="flex justify-between">
            <Link href="/">
              <Image
                src={play}
                className="h-7 w-7 p-1 bg-white rounded-full "
                width={40}
                height={40}
                alt="play"
              />
            </Link>
            <Link
              href={{
                pathname: "/movies",
                query: { movie: Medium.id.toString() },
              }}
              className="p-1 bg-zinc-800 border-2 border-zinc-600 rounded-full"
              scroll={false}
            >
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
          <h1 className="text-md font-semibold">{Medium["title"]}</h1>
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
