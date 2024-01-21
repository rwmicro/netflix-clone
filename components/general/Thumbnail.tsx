import Link from "next/link";
import Image from "next/image";

import play from "../../public/assets/img/tools/media.png";
import downarrow from "../../public/assets/img/tools/down-arrow.png";

var posterFilm = "https://image.tmdb.org/t/p/w500";

export default function Thumbnail({ Medium }) {
  return (
    <>
      <div className="thumbnail slide cursor-pointer rounded-sm overflow-hidden hover:overflow-visible">
        <Link
          href={"/watch/" + Medium["id"].toString()}
          as={`/watch/${Medium["title"]}`}
        >
          {(Medium["backdrop_path"] && (
            <Image
              src={posterFilm + Medium["backdrop_path"]}
              className="xl:h-32 w-64 2xl:h-40 2xl:w-72 shadow-md rounded-t-sm"
              width={600}
              height={300}
              alt={Medium.title}
            />
          )) || (
            <div className="bg-neutral-900 h-32 w-64 2xl:h-40 2xl:w-72 flex items-center justify-center">
              <p>Media error</p>
            </div>
          )}
        </Link>
        <div
          className="hidden p-3 shadow-xl rounded-b-md w-full z-[500] thumbnail_pop"
          style={{ backgroundColor: "#141414" }}
        >
          <div className="flex justify-between">
            <Link
              href={"/watch/" + Medium["id"].toString()}
              as={`/watch/${Medium["title"]}`}
            >
              <Image
                src={play}
                className="h-7 w-7 p-1 bg-white rounded-full "
                width={40}
                height={40}
                alt="play"
              />
            </Link>
            <Link
              href={"/movies?movie=" + Medium["id"].toString()}
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
          <h1 className="text-md font-semibold">{Medium["title"]}</h1>
          <div className="flex align-middle gap-2 text-xs">
            <p className="text-green-500">
              Recommended at {(Medium["vote_average"] * 10).toPrecision(4)}%
            </p>
            <span className="uppercase">{Medium["original_language"]}</span>
            <span>{Medium["release_date"].split("-")[0]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
