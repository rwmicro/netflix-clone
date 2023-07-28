import Header from '../../components/Header'
import Details from "../../components/assets/film/Details";
import Popup from "../../components/assets/film/Popup";
import Footer from "../../components/Footer";
import Films from '../../public/assets/json/films.json'

export default function PageFilm({film}){

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



  const lienimage = "https://image.tmdb.org/t/p/original";


  console.log(film)

  if(!film) return (<></>);

  return (
    <>
    <Header/>
      <div className="page-film">
        <div
          className="div-bg"
          style={
              {
                  backgroundImage:
                    "url('" + lienimage + film['backdrop_path'] + "')",
                }
          }
        >
          <h1>{film.title}</h1>
        </div>
        <div className="div-infos-film-1">
          <div>
            <i
              className="fas fa-star"
              style={{ color: "#ED8936", float: "left" }}
              aria-hidden="true"
            >
              {" "}
              <span> {film.vote_average * 10} % </span>
            </i>

            <i
              className="far fa-clock"
              style={{ color: "#d2d3d4", marginleft: "55px" }}
              aria-hidden="true"
            >
              {" "}
              <span>
                {" "}
                {heure}h {minutes > 0 ? minutes + " min" : ""}
              </span>
            </i>
          </div>
        </div>
        <div className="div-presentation-film">
          <img
            src={
              film.postersource
                ? film.posterPath
                : lienimage + film.poster_path
            }
            alt={film.title}
          ></img>
          <div className="div-film-infos">
            <h1>{film.title}</h1>
            <span>{film.release_date.slice(0, 4)}</span>
            <span> | </span>
            <span>{film.genres[0].name}</span>

            <p>{film.overview}</p>
            <Popup genre="Bande Annonce" film={film} />
            <Popup genre="Regarder" film={film} />
          </div>
        </div>
        <Details film={film} />
      </div>

      <Footer />
    </>
  );
};

/*
  var temps = film.runtime * 0.016667;
  var heure = temps.toString().slice(0, 1);
  var minutes = (parseInt(temps.toString().slice(2, 4)) * 0.6).toString().slice(0, 2);

*/