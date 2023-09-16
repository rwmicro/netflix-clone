import Head from "next/head";
import Header from "../components/Header";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/MediaList";
import Footer from "../components/Footer";
import { useState, useEffect, Suspense } from "react";
import { getGenreMovies,getFilm } from "../ts/datas";
import { Film, FilmPoster } from "../ts/Types";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

export default function Genres() {
  
  const router = useRouter();
  const query = router.query;
  const genre = query.genre;

  const headerFilm = query.header ? query.header : "555";

  if(!genre) return <Loading />;
  var [films, setFilms] = useState<Array<Array<FilmPoster>>>(null);
  const [film, setFilm] = useState<Film>();
  useEffect(() => { 
    const filmsPromise: Promise<Array<Array<FilmPoster>>> = getGenreMovies(genre.toString());
    filmsPromise.then(results => setFilms(results));
    const filmPromise:Promise<Film> = getFilm(headerFilm.toString());
    filmPromise.then(results => setFilm(results));
  }, [genre]); 
  if(!film) return <Loading />;
  if(!films) return <Loading />;

  return (
    <>
      <Head>
        <title>Rigflix | {genre}</title>
      </Head>
      <Header />
      <HeadTypes medium={film} />
      <Suspense fallback={<div className="h-screen w-full bg-black"></div>}>
        <Filmlist Films={films} />
      </Suspense>
      <Footer />
    </>
  );
}