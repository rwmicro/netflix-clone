import HeadTypes from "../../components/movies/HeadTypes";
import Footer from "../../components/main/Footer";
import { Film } from "../../ts/Types";
import Loading from "../../components/loading/Loading";
import Pop from "../../components/movies/pop";
import { Suspense } from "react";
import MediaList from "../../components/general/MediaList";
import { getMedias } from "../../ts/datas";
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
  const mediaData = await getMedias("movie");

  if (!film) {
    return <Loading />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeadTypes film={film} />
        <MediaList type="movie" mediaData={mediaData} />
        <Pop />
        <Footer />
      </Suspense>
    </>
  );
}
