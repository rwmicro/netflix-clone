import Link from "next/link";

var posterFilm = "https://image.tmdb.org/t/p/original";

const Card = ({ film }) => {
  return (
    <>
      <Link
        href={{
          pathname: "/Films/[film]",
          query: { film: film.title },
        }}
        className="w-42 "
      >
        <img
          src={
            film.postersource ? film.posterPath : posterFilm + film.poster_path
          }
          alt={film.title}
          className="w-full h-full rounded-sm"
        ></img>
      </Link>
    </>
  );
};

export default Card;
