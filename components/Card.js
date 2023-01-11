import Link from "next/link";

var posterFilm = "https://image.tmdb.org/t/p/original";

const Card = ({ film }) => {
  return (
    <div className="films-cards">
      <Link href={{
            pathname: '/Films/[film]',
            query: { film: film.title},
          }}>
        <img src={film.postersource ? film.posterPath : posterFilm + film.poster_path} alt={film.title}></img>
      </Link>
      <h4>{film.title}</h4>
    </div>
  );
};

export default Card;
