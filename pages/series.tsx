import Head from "next/head";
import SeriesHead from "../components/series/SeriesHead";
import SeriesList from "../components/MediaList";
import Footer from "../components/Footer";
import { Film } from "../ts/Types";
import { getMedia } from "../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pop from "../components/series/pop";

export default function Films() {
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    const filmPromise: Promise<Film> = getMedia("tv","60574");
    filmPromise.then((results) => setFilm(results));
  }, []);

  return (
    <>
      <Head>
        <title>Netflix | Series</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <SeriesHead medium={film} />
        <SeriesList type='tv'/>
        <Pop />
      <Footer />
      </Suspense>
    </>
  );
}
