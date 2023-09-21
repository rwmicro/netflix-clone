import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Film } from "../../ts/Types";
import IMDB from "public/assets/img/tools/imdb.svg";
import { useRouter } from "next/router";
import Loading from "../main/Loading";
import media from "public/assets/img/tools/media.png";
import infos from "public/assets/img/tools/informations.png";
import N from "public/assets/img/tools/N.png";
import Header from "../main/Header";

import mutedImage from "public/assets/img/tools/muted.png";
import unmuted from "public/assets/img/tools/unmuted.png";

import ReactPlayer from "react-player/youtube";

const HeadFilms = ({ medium }) => {
  const film: Film = medium;
  if (!film) return <Loading />;

  const router = useRouter();
  const query = router.query;

  const wallpaper = useMemo(() => {
    if (router.pathname == "/movies") {
      const filmHeader = require("/assets/img/films/wallpapers/joker.jpg");
      return filmHeader.default.src;
    }
    if (query.wallpaper) return query.wallpaper;
  }, [router.pathname, query.wallpaper]);

  const POSTER = "https://image.tmdb.org/t/p/original/";

  const background = wallpaper || POSTER + film["backdrop_path"];

  const [muted, setMuted] = useState(true);

  return (
    <>
      <Header />
      <div
        className="h-[98vh] w-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat z-[-1] mask overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >{document.body.clientWidth <= 1900 ||document.body.clientWidth >= 1950 ? <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=zAGVQLHvwOY"
          playing
          muted={muted}
          loop
        /> : 
        <ReactPlayer
        width="1920px"
        height="1080px"
          url="https://www.youtube.com/watch?v=zAGVQLHvwOY"
          playing
          muted={muted}
          loop
          style={{ marginTop: "-30px" }}
        />}
      </div>
      <div className="h-[98vh] w-full">
        <div className="absolute bottom-44 w-3/4 text-white lg:bottom-36 left-16 lg:left-20 xl:left-24">
          <div className="flex mb-4">
            <Image className="w-8" src={N} alt="N logo" />
            <span className="text-3xl font-thin mt-2.5 ml-2 lg:text-2xl xl:text-3xl">
              Films
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href={"https://www.imdb.com/title/" + film.imdb_id}
              target="_blank"
              className="w-16"
            >
              <Image src={IMDB} alt="IMDB" width={60} height={50} />
            </Link>
            <span className="text-sm font-semibold">
              {film["vote_average"]}
            </span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film["runtime"]}min</span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">
              {film["release_date"].split("-", 1)}
            </span>
          </div>
          <h1 className="text-6xl font-bold mt-1 lg:text-4xl xl:text-5xl">
            {film["title"]}
          </h1>
          <p className="w-1/3 mb-8 mt-3 text-sm lg:text-base xl:text-lg">
            {film ? film["overview"] : ""}
          </p>
          <div className="flex gap-2">
            <Link
              href={{
                pathname: "/watch/[watch]",
                query: { watch: film["id"].toString() },
              }}
              as={`/movies/${film["title"]}`}
              className="flex align-center justify-center w-44 rounded-md bg-white text-black font-semibold p-3 text-xl hover:bg-slate-200"
            >
              <Image src={media} className="w-7 h-7 mr-2" alt="media" />
              <span>Watch now</span>
            </Link>
            <Link
              href={{
                pathname: "/movies",
                query: { movie: film["id"].toString() },
              }}
              as={`/movies/${film["title"]}`}
              className="flex align-center justify-center w-44 rounded-md text-white bg-[#1C1917] font-semibold p-3 text-xl hover:brightness-[.90]"
            >
              <Image
                src={infos}
                width={40}
                height={40}
                className="w-7 h-7 mr-2"
                alt="media"
              />
              <span>More infos</span>
            </Link>
          </div>
          <div className="flex gap-2 mt-4 text-neutral-400">
            {film["genres"].map((genre) => (
              <span className="text-sm font-semibold">• {genre["name"]} </span>
            ))}
            <span className="text-sm font-semibold">•</span>
          </div>
        </div>
        <div className="absolute bottom-20 right-0 flex gap-3 items-center">
          <button
            className="h-fit w-fit border-2 rounded-full p-3"
            onClick={() => setMuted(!muted)}
          >
            {!muted && (
              <Image
                src={unmuted}
                alt="unmuted"
                width={40}
                height={40}
                className="rounded-full h-6 w-6"
              />
            )}
            {muted && (
              <Image
                src={mutedImage}
                alt="muted"
                width={40}
                height={40}
                className="rounded-full h-6 w-6"
              />
            )}
          </button>
          <h1 className="bg-black/50 border-l-4 text-2xl p-3 pr-8 text-white font-normal lg:text-xl xl:text-2xl">
            16+
          </h1>
        </div>
      </div>
    </>
  );
};

export default React.memo(HeadFilms);

/*
      <div className="absolute -top-7 left-0 flex align-center justify-center w-full h-screen -z-50">

        </div>
        */
