import Header from "../Header";
import { useEffect, useState } from "react";
import { getMedia, getSimilarMedia, getVideos } from "../../ts/datas";
import { useRouter } from "next/router";
import { Film, Actors } from "../../ts/Types";
import Loading from "../Loading";
import ReactPlayer from "react-player";

import media from "public/assets/img/tools/media.png";
import hd from "public/assets/img/tools/hd.png";
import ad from "public/assets/img/tools/ad.png";
import dolby from "public/assets/img/tools/dolby.png";

import Image from "next/image";
import Link from "next/link";

import mutedImage from "public/assets/img/tools/muted.png";
import unmuted from "public/assets/img/tools/unmuted.png";
import Episodes from "./episodes";

export default function Pop() {
  const router = useRouter();
  const { serie: movieID } = router.query;

  const [film, setFilm] = useState<Array<any>>();
  const [video, setVideo] = useState<Array<any>>();
  const [similar, setSimilar] = useState<Array<any>>();
  const [muted, setMuted] = useState(true);
  const [show, setShow] = useState(true);
  const [background, setBackground] = useState(null);
  const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    if (movieID) {
      Promise.all([
        getMedia("tv", movieID.toString()),
        getSimilarMedia("tv", movieID),
        getVideos("tv", movieID),
      ])
        .then(([filmData, similarData, videoData]) => {
          setFilm(filmData);
          setSimilar(similarData);
          setVideo(videoData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [movieID]);

  if (!film || !similar) return <Loading />;

  const POSTER = "https://image.tmdb.org/t/p/original";
  {
    video &&
      video["results"].map((video) => {
        if(video.type === "Trailer") setBackground("https://www.youtube.com/watch?v=" + video.key), setTrailer(true);
      });
      if(!background) setBackground( POSTER + film["backdrop_path"]);
  }
  if (show)
    return (
      <>
        <div
          className="fixed top-10 w-2/4 left-1/2 -translate-x-1/2 rounded-md overflow-hidden overflow-y-scroll max-h-full z-[999]"
          style={{ backgroundColor: "#141414" }}
        >
          <div
            className="h-[60vh] w-full bg-cover bg-center bg-no-repeat z-[-1] mask relative"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            {trailer && (
              <ReactPlayer
                url={background}
                width="1000px"
                height="600px"
                playing
                muted={true}
                loop
                style={{ marginTop: "-50px" }}
              />
            )}
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
          <div className="-mt-36">
            <div className="p-10 pt-0">
              <h1 className="text-6xl text-white mb-10 font-bold">
                {film.name}
              </h1>
              <Link
                href={{
                  pathname: "/watch/[watch]",
                  query: { watch: film["id"].toString() },
                }}
                as={`/watch/${film["name"]}`}
                className="flex align-center justify-center w-44 rounded-md bg-white text-black font-semibold p-3 text-xl hover:bg-slate-200"
              >
                <Image src={media} className="w-7 h-7 mr-2" alt="media" />
                <span>Watch now</span>
              </Link>
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col text-sm text-white mt-5 w-1/2 ">
                  <div className="flex gap-2 text-neutral-500 text-sm font-semibold items-center">
                    <p className="text-green-500">
                      Recommended at {(film["vote_average"] * 10).toFixed(1)}%
                    </p>
                    <span>{film["first_air_date"].split("-", 1)}</span>
                    <span>{film["number_of_seasons"]} seasons</span>
                    <Image src={hd} className="w-7 h-7 mr-2" alt="hd" />
                    <Image src={dolby} className="w-7 h-7 mr-2" alt="spatial" />
                    <Image src={ad} className="w-7 h-7 mr-2" alt="ad" />
                  </div>
                  <h2 className="mt-1">{film.overview}</h2>
                </div>
                <div className="flex flex-col gap-2 w-1/3">
                  <span className="text-neutral-400 font-normal">
                    Production Companies :
                    {film["production_companies"] &&
                      film["production_companies"].map((genre) => (
                        <span className="text-sm font-normal text-white">
                          {" "}
                          {genre["name"]},{" "}
                        </span>
                      ))}
                  </span>
                  <span className="text-neutral-400 font-normal">
                    Genres :
                    {film["genres"].map((genre) => (
                      <span className="text-sm font-normal text-white">
                        {" "}
                        {genre["name"]},{" "}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <Episodes medium={film} />
            <div className="flex flex-col gap-2 p-10">
              <h1 className="text-4xl font-semibold text-white mb-8">
                Recommendations
              </h1>
              <div className="grid grid-cols-3 gap-5">
                {similar.results.slice(0, 9).map((movie) => (
                  <Link
                    className="flex flex-col gap-2 bg-neutral-800 rounded-md overflow-hidden h-96"
                    href={{
                      pathname: "/movies",
                      query: { movie: movie["id"].toString() },
                    }}
                  >
                    <Image
                      src={POSTER + movie["backdrop_path"]}
                      alt="poster"
                      width={250}
                      height={100}
                      className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                    <div className="p-2 text-white text-sm">
                      <span className="text-xl font-bold">{movie.name}</span>
                      <div className="flex gap-2 text-neutral-500 text-sm font-semibold items-center">
                        <Image src={hd} className="w-7 h-7 mr-2" alt="hd" />
                        <Image
                          src={dolby}
                          className="w-7 h-7 mr-2"
                          alt="dolby"
                        />
                        <Image src={ad} className="w-7 h-7 mr-2" alt="ad" />
                      </div>
                      <span className="text-white">{movie["title"]}</span>
                      <span className="text-white">{movie["overview"]}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed top-0 w-screen left-0 h-screen z-[998] bg-black/80"
          onClick={() => router.beforePopState}
        ></div>
      </>
    );
}
