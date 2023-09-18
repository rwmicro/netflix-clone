import Head from "next/head";
import SeriesHead from "../components/series/SeriesHead";
import SeriesList from "../components/MediaList";
import Footer from "../components/Footer";
import { Film } from "../ts/Types";
import { getMedia } from "../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pop from "../components/series/pop";
import { useRouter } from "next/router";

export default function Films() {
  const router = useRouter();
  const { serie: movieID } = router.query;
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
      <Footer />
      {movieID && (
        <div
        className="fixed top-0 w-screen left-0 h-screen z-[998] bg-black/80"
        onClick={() => router.push('/series','/series',{scroll: false})}
        >
            <Pop movieID={movieID} />
          </div>
        )}
        </Suspense>
    </>
  );
}
