import Link from "next/link";

export default function HeadFilms({ medium }) {
  var posterFilm = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <section
        className="head-films"
        style={{
          backgroundImage: medium.bgsource
            ? "url('" + medium.backgroundPath + "')"
            : "url('" + posterFilm + medium.backdrop_path + "')",
        }}
      >
        <div>
          <h1>{medium.title}</h1>
          <h2>{medium.Mediumtype}</h2>
          <h4>
            {medium.genres[0] ? medium.genres[0].name : ""}{" "}
            {medium.genres[1] ? ", " + medium.genres[1].name : ""}{" "}
            {medium.genres[2] ? ", " + medium.genres[2].name : ""}{" "}
          </h4>
          <Link
            href={{
              pathname: "Films/[film]",
              query: medium,
            }}
            as={"Films/" + medium.title}
            legacyBehavior
          >
            <a>
              Lecture <i className="fas fa-play" aria-hidden="true"></i>
            </a>
          </Link>
          <h3>13 +</h3>
        </div>
      </section>

    </>
  );
}
