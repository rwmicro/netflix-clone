import { Film, FilmPoster, ImageTMDB, Actors } from "./Types";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_TOKEN_TMDB,
  },
};

const fetchFromAPI = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export async function getTopRated(): Promise<Array<Array<FilmPoster>>> {
  const urls = Array.from(
    { length: 1 },
    (_, i) =>
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${
        i + 1
      }`
  );
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getGenreMovies(
  genre: string
): Promise<Array<Array<FilmPoster>>> {
  const urls = Array.from(
    { length: 1 },
    (_, i) =>
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${
        i + 1
      }&sort_by=popularity.desc&with_genres=${genre}`
  );

  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getPopular(): Promise<Array<Array<FilmPoster>>> {
  var ret = [];
  for (var i = 1; i < 2; i++) {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + i;
    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Failed to fetch data");
    var tmp = res.json();
    tmp.then((results) => {
      ret.push(results.results);
    });
  }
  return ret;
}

export async function getFilm(filmID: String): Promise<Film> {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    filmID +
    "&append_to_response=images";

  const filmsList: Promise<Film> = new Promise<Film>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
  return filmsList;
}

export async function getData(filmID: string) {
  const url = "https://api.themoviedb.org/3/movie/" + filmID + "/images";
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getImages(filmID: Number): Promise<ImageTMDB> {
  const url = "https://api.themoviedb.org/3/collection/" + filmID + "/images";

  const filmsList: Promise<ImageTMDB> = new Promise<ImageTMDB>(
    (resolve, reject) => {
      fetch(url, options)
        .then((res) => resolve(res.json()))
        .catch((err) => {
          reject(err);
        });
    }
  );
  return filmsList;
}

export async function get(genre: string): Promise<Array<Array<FilmPoster>>> {
  var ret = [];
  for (var i = 1; i < 10; i++) {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=" +
      i +
      "&sort_by=popularity.desc&with_genres=" +
      genre;
    const res = await fetch(url, options);
    if (!res.ok) throw new Error("Failed to fetch data");
    var tmp = res.json();
    tmp.then((results) => {
      ret.push(results.results);
    });
  }
  return ret;
}

export async function getActors(filmID: Number): Promise<Actors> {
  const url =
    "https://api.themoviedb.org/3/movie/" + filmID + "/credits?language=fr-FR";
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
