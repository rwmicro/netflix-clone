import Image from "next/image";
import Link from "next/link";
import filmGenres from "../public/assets/json/films/genres.json";

export default function Categories() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-wide mb-3">Categories</h1>
      <div className="flex gap-5">
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
                  width={400}
                  height={200}
                  alt={genre.genre}
                  className="rounded-md brightness-75 hover:brightness-[.65]"
                />
                <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-bold">
                  {genre.genre}
                </h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
