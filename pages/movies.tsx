import Head from "next/head";
import Header from "../components/Header";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/Filmslist";
import Footer from "../components/Footer";
import { useState, useEffect, Suspense } from "react";
import { getFilmsList,getFilm } from "../ts/datas";
import { Film } from "../ts/Types";

export default function Films() {

  const filmsPromise: Promise<Array<Film>> = getFilmsList();
  const filmPromise:Promise<Film> = getFilm("76600");

  var [films, setFilms] = useState<Array<Film>>({ results: [] });
  const [film, setFilm] = useState<Film>();

  useEffect(() => { 
    
    filmsPromise.then(function (result) {
      return setFilms(result);
    });

    filmPromise.then(function (result) {
      return setFilm(result);
    });

  }, []);

  return (
    <>
      <Head>
        <title>Rigflix | Films</title>
      </Head>
      <Header />
      <HeadTypes medium={film} />
      <Suspense fallback={<div>Loading...</div>}>
      <Filmlist Films={films.results} />
        </Suspense>
      <Footer />
    </>
  );
}