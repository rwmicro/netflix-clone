import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FilmPoster } from "../../ts/Types";
import ReactPlayer from "react-player";
import { getVideos } from "../../ts/datas";
import Loading from "../../components/Loading";

import Image from "next/image";
import Link from "next/link";

export default function PageFilm() {
  const router = useRouter();

  const { watch: movieID } = router.query;

  const [film, setFilm] = useState<Array<FilmPoster[]>>();

  useEffect(() => {
    if (movieID) {
      Promise.all([getVideos(movieID.toString())])
        .then(([filmData]) => {
          setFilm(filmData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [movieID]);

  if (!film) return <Loading />;

  return (
    <>
      <div className="min-h-screen">
        <button type="button"className="w-fit h-fit" onClick={() => router.back()}>
          <Image src="" width={200} height={50} alt="" />
        </button>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zAGVQLHvwOY"
        width=""
        height="932px"
        playing
        muted={true}
        loop
        controls
      />
    </>
  );
}
