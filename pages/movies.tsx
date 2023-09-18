import Head from "next/head";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/MediaList";
import Footer from "../components/Footer";
import { Film } from "../ts/Types";
import { getMedia } from "../ts/datas";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pop from "../components/pop";
import { useRouter } from "next/router";

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
        <title>Netflix | Films</title>
      </Head>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </>
  );
}
