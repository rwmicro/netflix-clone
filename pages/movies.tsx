import Head from "next/head";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/MediaList";
import Footer from "../components/Footer";
import { Film } from "../ts/Types";
import { getMedia } from "../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pop from "../components/pop";

export default function Films() {
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    const filmPromise: Promise<Film> = getMedia("movie","475557");
    filmPromise.then((results) => setFilm(results));
  }, []);

  return (
    <>
      <Head>
        <title>Netflix | Films</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <HeadTypes medium={film} />
        <Filmlist type='movie' />
        <Pop />
      <Footer />
      </Suspense>
    </>
  );
}
