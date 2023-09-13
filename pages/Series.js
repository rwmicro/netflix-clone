import Head from "next/head";
import Header from "../components/Header";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/Filmslist";
import Footer from "../components/Footer";
import { useState, useEffect, Suspense } from "react";
import { getFilmPostersList,getFilm } from "../ts/datas";
import { Film, FilmPoster } from "../ts/Types";

export default function Films() {

  var [films, setFilms] = useState<Array<Array<FilmPoster>>>(null);
  const [film, setFilm] = useState<Film>();

  useEffect(() => { 
    const filmsPromise: Promise<Array<Array<FilmPoster>>> = getFilmPostersList();
    const filmPromise:Promise<Film> = getFilm("475557");
    filmsPromise.then(results => setFilms(results));
    filmPromise.then(results => setFilm(results));
  }, []); 
  if(!film) return;
  if(!films) return;
  return (
    <>
      <Head>
        <title>Rigflix | Films</title>
      </Head>
      <Header />
      <HeadTypes medium={film} />
      <Suspense fallback={<div>Loading...</div>}>
        <Filmlist Films={films} />
      </Suspense>
      <Footer />
    </>
  );
}