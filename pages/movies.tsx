import Head from "next/head";
import HeadTypes from "../components/movies/HeadTypes";
import Filmlist from "../components/general/MediaList";
import Footer from "../components/main/Footer";
import { Film } from "../ts/Types";
import { getMedia } from "../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/main/Loading";
import Pop from "../components/movies/pop";
import { useRouter } from "next/router";
import Header from "../components/main/Header";

export default function Films() {
  const router = useRouter();
  const { movie: movieID } = router.query;
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    const filmPromise: Promise<Film> = getMedia("movie", "475557");
    filmPromise.then((results) => setFilm(results));
  }, []);

  return (
    <>
      <Head>
        <title>Netflix - Films</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense fallback={<Loading />}>
        <div className="hidden sm:block">
        <HeadTypes medium={film} />
        <Filmlist type="movie" />
        <Footer />
        {movieID && (
          <div
            className="fixed top-0 w-screen left-0 h-screen z-[998] bg-black/80"
            onClick={() => router.push("/movies", "/movies", { scroll: false })}
          >
            <Pop movieID={movieID} />
          </div>
        )}
        </div>
      </Suspense>
      <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Please view this site on a computer</p>
      </div>
    </>
  );
}
