import Link from "next/link";

var posterFilm = "https://image.tmdb.org/t/p/original";

export default function Card({ film }) {

  return (
    <>
      <Link
        href={{
          pathname: "/movies/[film]",
          query: { film: film['id']
   },
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

