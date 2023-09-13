import Link from "next/link";
import Image from "next/image";
import IMDB from 'public/assets/img/tools/imdb.svg';

var posterFilm = "https://image.tmdb.org/t/p/w500";

export default function Card({ film }) {

  return (
    <>
      <Link
        href={{
          pathname: "/movies/[movie]",
          query: { movie: film.id.toString()},
        }}
        className="h-44 w-76 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 transition "
      >
        <Image
          src={
            posterFilm + film.backdrop_path
          }
          className="h-full w-full"
          width={600}
          height={300}
          alt={film.title}
        />
      </Link>
    </>
  );
};

/*
 <div className="p-3">
        <h1 className="text-2xl font-semibold">{film['title']}</h1>
        <div className="flex gap-2">
          <Link href={"https://www.imdb.com/title/" + film.imdb_id} target="_blank" className="mt-0.5">
            <Image src={IMDB} alt="IMDB" width={30} height={20} />
          </Link>
            <span className="text-sm font-semibold">{film['vote_average']}</span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film['release_date'].split('-',1)}</span>
          </div>
          </div>
          */