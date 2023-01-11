/*import React, { useEffect, useState } from "react";
import axios from "axios";*/
import Card from "./Card";

export default function Filmslist({ Films }){
  /* const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/438631?api_key=bc697e83b8bb94f253e4d3246eb062e7&language=fr-FR"
      )
      .then((res) => setData(res.data));
  }, []);
*/
  return (
    <div className="films-list">
      <div className="div-grid">
        {Films.map((film) => film !== '' ?
          <Card key={film.id} film={film} /> : ''
        )}
      </div>
    </div>
  );
};