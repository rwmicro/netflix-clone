import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getFilm, getActors } from "../ts/datas";
import { useRouter } from "next/router";
import { Film, Actors } from "../ts/Types";
import Loading from "../components/Loading";
import ReactPlayer from "react-player";

import media from "public/assets/img/tools/media.png";

import Image from "next/image";
import Link from "next/link";

import mutedImage from "public/assets/img/tools/muted.png";
import unmuted from "../public/assets/img/tools/unmuted.png";

export default function Pop() {
  const router = useRouter();
  const { m: movieID } = router.query;

  const [film, setFilm] = useState<Film>();
  const [actors, setActors] = useState<Actors>();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (movieID) {
      Promise.all([getFilm(movieID.toString()), getActors(Number(movieID))])
        .then(([filmData, actorData]) => {
          setFilm(filmData);
          setActors(actorData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [movieID]);

  const POSTER = "https://image.tmdb.org/t/p/original/";

  if (!film) return <Loading />;

  const background = POSTER + film["backdrop_path"];
  console.log(film);
  return (
    <>
      <div className="absolute top-10 w-2/4 left-1/2 -translate-x-1/2 bg-zinc-900 rounded-md overflow-hidden">
        <div
          className="h-[55vh] w-full bg-cover bg-center bg-no-repeat z-[-1] mask relative"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <button
            className="h-fit w-fit border-2 rounded-full p-2 absolute bottom-14 right-14 bg-zinc-900/50"
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
        </div>

        <div className="flex gap-2 items-center -mt-36">
          <div className="p-10 pt-0">
            <h1 className="text-6xl text-white  mb-10">{film.title}</h1>
            <Link
              href={{
                pathname: "/movies/[movie]",
                query: { movie: film["id"].toString() },
              }}
              as={`/movies/${film["title"]}`}
              className="flex align-center justify-center w-44 rounded-md bg-white text-black font-semibold p-3 text-xl hover:bg-slate-200"
            >
              <Image src={media} className="w-7 h-7 mr-2" alt="media" />
              <span>Watch now</span>
            </Link>
            <div className="flex flex-col text-sm w-1/2 text-white mt-5">
              <div className="flex gap-2 text-neutral-500 text-sm font-semibold">
                <span>{film.release_date.split("-", 1)}</span>
                <span>{film["runtime"]}min</span>
              </div>
              <h2 className="mt-1">{film.overview}</h2>
            </div>
          </div>
        
        <div className="flex gap-2 items-center">
          <span className="text-neutral-400 font-normal">
            Genres :
            {film["genres"].map((genre) => (
              <span className="text-sm font-normal text-white"> {genre["name"]}, </span>
            ))}
          </span>
        </div>
        </div>
      </div>
    </>
  );
}

/*

        <ReactPlayer
          url="https://www.youtube.com/watch?v=zAGVQLHvwOY"
          width=""
          height="1080px"
          playing
          muted={true}
          loop
          style={{ marginTop: "-30px" }}
        />*/
