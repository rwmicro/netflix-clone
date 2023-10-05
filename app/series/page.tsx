import SeriesList from "../../components/general/MediaList";
import Footer from "../../components/main/Footer";
import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import Pop from "../../components/series/pop";
import Header from "../../components/main/Header";

import { getMedia } from "../../ts/datas";
import type { Metadata } from "next";
import SeriesHead from "../../components/series/SeriesHead";

export const metadata: Metadata = {
  title: "Series - Netflix",
  description: "Series page of the Netflix Clone app made by Nebula Company.",
};

async function getDatas() {
  const serie = await getMedia("tv", "96677");

  return { serie };
}

export default async function Series() {
  const { serie } = await getDatas();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="hidden sm:block">
          <SeriesHead serie={serie} />
          <SeriesList type="tv" />
          <Pop />
          <Footer />
        </div>
      </Suspense>
      {/* Mobile */}
      <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
          Please view this site on a computer
        </p>{" "}
      </div>
    </>
  );
}

/*
{movieID && (
        <div
        className="fixed top-0 w-screen left-0 h-screen z-[998] bg-black/80"
        onClick={() => router.push('/series','/series',{scroll: false})}
        >
            <Pop movieID={movieID} />
          </div>
        )}
        */
