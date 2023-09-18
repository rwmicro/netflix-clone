import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FilmPoster } from "../../ts/Types";
import ReactPlayer from "react-player";
import { getVideos } from "../../ts/datas";
import Loading from "../../components/Loading";

import Image from "next/image";

export default function PageFilm() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen">
        <button type="button"className="w-fit h-fit" onClick={() => router.back()}>
          <Image src="" width={200} height={50} alt="" />
        </button>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=sODZLSHJm6Q"
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
