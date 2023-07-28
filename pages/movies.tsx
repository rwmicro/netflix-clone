import Head from "next/head";
import Header from "../components/Header";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/Filmslist";
import Footer from "../components/Footer";
import { useState, useEffect, Suspense } from "react";
import { getFilmsList,getFilm } from "../ts/datas";

interface Genre{
  id: Number;
  name: String;
}

type Film = {
  adult: Boolean;
  backdrop_path: String;
  belongs_to_collection: Object;
  budget: Number;
  genres: Array<Genre>;
  homepage: String;
  id: Number;
  imdb_id: String;
  original_language: String;
  original_title: String;
  overview: String;
  poster_path: String;
  production_companies: null;
  production_countries: null;
  release_date: String;
  revenue: Number;
  runtime: Number;
  spoken_languages: null;
  status: String;
  tagline: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}

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