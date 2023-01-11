import { useState, useEffect } from "react";
import Header from "../components/Header";
import HeadTypes from "../components/HeadTypes";
import Filmlist from "../components/Filmslist";
import Footer from "../components/Footer";
import ListeFilms from "../public/assets/json/series.json";
import Head from 'next/head'
import teotfw from '../public/assets/json/series/74577.json'

export default function Films(){
  
  var [Films, setFilms] = useState([]);
  var option = 0;

  useEffect(() => {
    {
      setFilms(
        option !== 0
          ? ListeFilms.map((film) =>
              parseInt(option) === film.genres[0].id ? film : "ate"
            )
          : ListeFilms
      );
    }
  }, [option]);
  
  const choixOption = () => {
    option = document.getElementById("choix-films").value;
  };

  return (
    <>
    <Head>
      <title>Rigflix | Series</title>
    </Head>
      <Header />
      <HeadTypes medium={teotfw} />
      <label>Genres :</label>
      <Filmlist Films={Films} />
      <Footer />

    </>)
};

/*
<select name="choix-films" id="choix-films" onClick={choixOption}>
        <option value="" defaultValue>
          Tous
        </option>
        {ListeFilms.map((film) => (
          <option value={film.genres[0].id} key={film.genres[0].id}>
            {film.genres[0].name}
          </option>
        ))}
      </select>



  

     

    </>
  );
  */