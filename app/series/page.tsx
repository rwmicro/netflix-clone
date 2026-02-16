import SeriesList from "../../components/general/MediaList";
import Footer from "../../components/main/Footer";
import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import Pop from "../../components/series/pop";

import { getMedia } from "../../ts/datas";
import type { Metadata } from "next";
import SeriesHead from "../../components/series/SeriesHead";

import { getMedias } from "../../ts/datas";

export const metadata: Metadata = {
  title: "Series - Netflix",
  description: "Series page of the Netflix Clone app made by Nebula Company.",
};

async function getDatas() {
  const serie = await getMedia("tv", "96677");

  return { serie };
}

export default async function Series() {
  const mediaData = await getMedias("tv");
  const { serie } = await getDatas();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          <SeriesHead serie={serie} />
          <SeriesList type="tv" mediaData={mediaData} />
          <Pop />
          <Footer />
        </div>
      </Suspense>
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
