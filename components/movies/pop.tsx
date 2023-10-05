"use client";
import { Suspense, useEffect, useState } from "react";
import { getMedia, getSimilarMedia, getVideos } from "../../ts/datas";
import { Film } from "../../ts/Types";
import ReactPlayer from "react-player/youtube";

import media from "public/assets/img/tools/media.png";
import hd from "public/assets/img/tools/hd.png";
import ad from "public/assets/img/tools/ad.png";
import dolby from "public/assets/img/tools/dolby.png";
import mutedImage from "public/assets/img/tools/muted.png";
import unmuted from "public/assets/img/tools/unmuted.png";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const POSTER = "https://image.tmdb.org/t/p/original";
const THUMBNAIL = "https://image.tmdb.org/t/p/w500";

import { useRouter } from 'next/navigation';
import LoadingPop from "../loading/LoadingPop";

export default function Pop() {
  const [film, setFilm] = useState<Film>();
  const [video, setVideo] = useState<Array<any>>();
  const [similar, setSimilar] = useState<Array<any>>();
  const [muted, setMuted] = useState(true);
  const [background, setBackground] = useState(null);
  const [trailer, setTrailer] = useState(false);

  const searchParams = useSearchParams();
  var movieID = searchParams.get("movie");

  const router = useRouter();


  useEffect(() => {
    async function fetchData() {
      try {
        const [filmData, similarData, videoData] = await Promise.all([
          getMedia("movie", movieID.toString()),
          getSimilarMedia("movie", movieID),
          getVideos("movie", movieID),
        ]);
        setFilm(filmData);
        setSimilar(similarData);
        setVideo(videoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    if (movieID) {
      fetchData();
    }
  }, [movieID]);


  useEffect(() => {
    let foundTrailer = false;

    if (video) {
      for (const v of video["results"]) {
        if (v.type === "Trailer") {
          setBackground("https://www.youtube.com/watch?v=" + v.key);
          setTrailer(true);
          foundTrailer = true;
          break;
        }
      }
    }

    if (!foundTrailer && film) {
      setBackground(POSTER + film["backdrop_path"]);
    }
  }, [video, film, trailer]);

  if (!movieID || !film || !similar){
    return null;
  };
  return (
    <>
    <Suspense fallback={<LoadingPop />}>
      <div
        className="h-screen w-full bg-black/30 fixed top-0 left-0"
        onClick={() => {
          router.push("/movies", {scroll: false});
          movieID = null;
        }}
      ></div>
      <div
      id='pop'
        className="fixed top-10 w-10/12 xl:w-2/4 left-1/2 -translate-x-1/2 rounded-md overflow-hidden overflow-y-scroll max-h-full z-[999]"
        style={{ backgroundColor: "#141414" }}
      >
        <div
          className="h-[60vh] w-full bg-cover bg-center bg-no-repeat mask relative brightness-90 z-[-1]"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {trailer && (
            <ReactPlayer
              url={background}
              width="100%"
              height="100%"
              playing
              controls={false}
              muted={muted}
              loop
              style={{ marginTop: "-50px" }}
            />
          )}
        </div>
        {trailer && <button
            className="h-fit w-fit border-2 rounded-full p-2 absolute top-96 mt-5 right-14 bg-zinc-900/50"
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
          </button>}
        <div className="-mt-36 ">
          <div className="p-10 pt-0">
            <h1 className="text-4xl xl:text-6xl font-bold text-white mb-10">
              {film.title}
            </h1>
            <Link
              href={"/watch/" + film["id"].toString()}
              as={`/watch/${film["title"]}`}
              className="flex align-center justify-center w-44 rounded-md bg-white text-black font-semibold p-3 text-xl hover:bg-slate-200"
            >
              <Image src={media} className="w-7 h-7 mr-2" alt="media" />
              <span>Watch now</span>
            </Link>
            <div className="flex gap-2 justify-between">
              <div className="flex flex-col text-sm text-white mt-5 w-1/2 ">
                <div className="flex flex-col md:flex-row gap-2 text-neutral-500 text-sm font-semibold md:items-center">
                  <p className="text-green-500">
                    Recommended at {(film["vote_average"] * 10).toFixed(1)}%
                  </p>
                  <span>{film.release_date.split("-", 1)}</span>
                  <span>{film["runtime"]}min</span>
                  <div className="flex">
                    <Image src={hd} className="w-7 h-7 mr-2" alt="hd" />
                    <Image src={dolby} className="w-7 h-7 mr-2" alt="spatial" />
                    <Image src={ad} className="w-7 h-7 mr-2" alt="ad" />
                  </div>
                </div>
                <h2 className="mt-1">{film.overview}</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/3 mt-10">
                <div className="text-neutral-400 font-normal">
                  Production Companies :{" "}
                  {film["production_companies"].map((genre, key) => (
                    <>
                    <div className="text-sm font-normal text-white inline-block" key={key}>
                      {genre["name"]},{" "}
                    </div>{" "}
                    </>
                  ))}
                </div>
                <div className="text-neutral-400 font-normal">
                  Genres :{' '}
                  {film["genres"].map((genre,key) => (
                    <>
                    <div className="text-sm font-normal text-white inline-block" key={key}>
                      {genre["name"]},{" "}
                    </div>{" "}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-10">
            <h1 className="text-2xl text-white mb-5 font-semibold">
              Recommendations
            </h1>
            <div className="grid grid-cols-3 gap-5 pb-20">
              {similar["results"].slice(0, 9).map((movie, key) => (
                <Link
                  className="flex flex-col gap-2 bg-neutral-800 rounded-md overflow-hidden h-96"
                  href={{
                    pathname: "/movies",
                    query: { movie: movie["id"].toString() },
                  }}
                  scroll={false}
                  onClick={() => {
                    document.getElementById("pop").scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={key}
                >
                  {(movie["backdrop_path"] && (
                    <Image
                      src={THUMBNAIL + movie["backdrop_path"]}
                      alt="poster"
                      width={250}
                      height={100}
                      className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  )) || (
                    <div className="bg-neutral-900 h-32 w-64 2xl:h-40 2xl:w-72 rounded-t-md text-white flex items-center justify-center">
                      <p>Media error</p>
                    </div>
                  )}

                  <div className="p-2 text-white text-sm">
                    <span className="text-xl font-bold">{movie.title}</span>
                    <div className="flex gap-2 text-neutral-500 text-sm font-semibold items-center">
                      <span>{movie.release_date.split("-", 1)}</span>
                      <Image src={hd} className="w-7 h-7 mr-2" alt="hd" />
                      <Image src={dolby} className="w-7 h-7 mr-2" alt="dolby" />
                      <Image src={ad} className="w-7 h-7 mr-2" alt="ad" />
                    </div>
                    <span className="text-white">{movie["overview"]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Suspense>
    </>
  );
}
