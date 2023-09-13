import Card from "./Card";
import Image from "next/image";
import { FilmPoster } from "../ts/Types";
import filmGenres from "../public/assets/json/films/genres.json";
import Link from "next/link";

export default function MediaList({ Films }) {
  return (
    <>
      <section className="text-white mt-2" style={{ fontFamily: "Inter" }}>
        <div className="ml-20 pb-20">
          <h1 className="text-4xl font-normal">Categories</h1>
          <div className="flex gap-5 mt-3">
            {filmGenres.map((genre) => {
              return (
                <>
                  <Link
                    className="relative"
                    href={{
                      pathname: "/movies/genres/[genre]",
                      query: {
                        genre: genre.id.toString(),
                        header: genre.idHeader.toString(),
                        wallpaper: genre.wallpaper
                          ? genre.wallpaper.toString()
                          : "",
                      },
                    }}
                    as={`/movies/genres/${genre.genre.toString()}`}
                  >
                    <Image
                      src={genre.image}
                      width={500}
                      height={200}
                      alt={genre.genre}
                      className="rounded-2xl brightness-75 hover:brightness-50"
                    />
                    <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-bold">
                      {genre.genre}
                    </h1>
                  </Link>
                </>
              );
            })}
          </div>
          <h1 className="text-4xl font-normal mt-10">Trends</h1>
          <div className="flex flex-wrap gap-2">
            {Films.map((element) =>
              element.map((film: FilmPoster) => (
                <Card key={film.id.toString()} film={film} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
