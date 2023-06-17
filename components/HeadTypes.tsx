import Link from "next/link";
import Image from "next/image";
import placeholder from "public/assets/img/tools/placeholder.png";

export default function HeadFilms({ medium }) {
  var posterFilm = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <section
        className="h-screen"
        style={{
          backgroundSize: "cover",
          backgroundImage: medium.bgsource
            ? "url('" + medium.backgroundPath + "')"
            : "url('" + posterFilm + medium.backdrop_path + "')",
        }}
      >
        <div className="pt-72 ml-20 text-white">
          <div className="flex">
            <div className="w-1 h-8 mr-2 bg-redflix"></div>
            <h2 className="text-2xl">DC Comics</h2>
          </div>
          <h1 className="text-6xl font-bold mt-5">{medium.title}</h1>
          <h2>{medium.Mediumtype}</h2>
          <h4 className="text-xl mt-5">
            {medium.genres[0] ? medium.genres[0].name : ""}{" "}
            {medium.genres[1] ? ", " + medium.genres[1].name : ""}{" "}
            {medium.genres[2] ? ", " + medium.genres[2].name : ""}{" "}
          </h4>
          <p className="w-1/3 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            tempore qui aut praesentium placeat velit minus incidunt sint
            repellat ipsa?
          </p>
          <Link
            href={{
              pathname: "Films/[film]",
              query: medium,
            }}
            as={"Films/" + medium.title}
            className="rounded-full bg-redflix p-3  text-xl font-normal"
          >
            Watch now
          </Link>
          <h1 className="text-3xl font-semibold mt-20">Overview</h1>
          <div className="inline-flex mt-4">
            <Image
              className="w-72 rounded-lg mr-5"
              src={placeholder}
              width={600}
              height={400}
              alt="photo"
            />
            <Image
              className="w-72 rounded-lg mr-5"
              src={placeholder}
              width={600}
              height={400}
              alt="photo"
            />
            <Image
              className="w-72 rounded-lg"
              src={placeholder}
              width={600}
              height={400}
              alt="photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
