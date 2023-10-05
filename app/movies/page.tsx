import HeadTypes from "../../components/movies/HeadTypes";
import Filmlist from "../../components/general/MediaList";
import Footer from "../../components/main/Footer";
import { Film } from "../../ts/Types";
import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import Pop from "../../components/movies/pop";
import Header from "../../components/main/Header";

import { getMedia } from "../../ts/datas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies - Netflix",
  description: "Movie page of the Netflix Clone app made by Nebula Company.",
};

async function getDatas() {
  const film: Film = await getMedia("movie", "19995");

  return { film };
}

export default async function Films() {
  const { film } = await getDatas();

  return (
    <>
      <div>
          <div className="hidden sm:block">
        <Suspense fallback={<Loading />}>
            <HeadTypes film={film} />
            <Filmlist type="movie" />
            <Pop />
            <Footer />
        </Suspense>
          </div>
        {/* Mobile */}
        <div className="min-h-screen w-full sm:hidden">
          <Header />
          <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
            Please view this site on a computer
          </p>{" "}
        </div>
      </div>
    </>
  );
}