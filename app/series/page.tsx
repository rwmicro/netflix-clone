import Head from "next/head";
import SeriesHead from "../../components/series/SeriesHead";
import SeriesList from "../../components/general/MediaList";
import Footer from "../../components/main/Footer";
import { Film } from "../../ts/Types";
import { getMedia } from "../../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../../components/main/Loading";
import Pop from "../../components/series/pop";
import { useRouter } from "next/router";
import Header from "../../components/main/Header";

export default function Films() {
  const router = useRouter();
  const { serie: movieID } = router.query;
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    const filmPromise: Promise<Film> = getMedia("tv","96677");
    filmPromise.then((results) => setFilm(results));
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Series</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense fallback={<Loading />}>
        <div className="hidden sm:block">
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
        </div>
        </Suspense>
        <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
          Please view this site on a computer
        </p>      </div>
    </>
  );
}
