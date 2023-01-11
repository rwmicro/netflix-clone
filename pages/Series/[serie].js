import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

var lienimage = "https://image.tmdb.org/t/p/original";

const PageFilm = () => {
  const location = useLocation();
  const film = location.state;

  return (
    <div className="div-pagefilm">
      <Header />
      <div
        className="div-bg"
        style={{ backgroundImage: `url(${lienimage + film.backdrop_path})` }}
      >
        <h1>{film.title}</h1>
      </div>
      <div></div>
      <div className="div-presentation-film">
          <img src={lienimage + film.poster_path} alt={film.title}></img>
        <div>
          <h1>{film.title}</h1>
          <span>{film.release_date.slice(0, 4)}</span>
          <span> | </span>
          <span>{film.genres[0].name}, </span>
          <span>{film.genres[1].name}, </span>
          <span>{film.genres[2].name}</span>
          <p>{film.overview}</p>
          <button>Bande Annonce</button>
          <button>Regarder</button>
        </div>
      </div>
    </div>
  );
};
export default PageFilm;
