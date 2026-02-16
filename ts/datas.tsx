import { FilmPoster, ImageTMDB, Actors } from "./Types";

const THEMOVIEDB_API = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY_THEMOVIEDB}`,
  },
};

const fetchFromAPI = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export async function getNowPlaying(media: string) {
  const urls = [
    `${THEMOVIEDB_API}/trending/${media}/day?language=en-US`,
  ];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getTopRated(media: string) {
  const urls = [
    `${THEMOVIEDB_API}/${media}/top_rated?language=en-US&page=1&region=us`,
  ];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getGenres(media: string, genre: string) {
  const urls = [
    `${THEMOVIEDB_API}/discover/${media}?language=en-US&page=1&region=us&include_adult=false&language=en-US&include_video=false&sort_by=popularity.desc&with_genres=${genre}`,
  ];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getMedia(media: string, filmID: string) {
  const url = `${THEMOVIEDB_API}/${media}/${filmID}?append_to_response=images`;
  return fetchFromAPI(url);
}

export async function getData(filmID: string) {
  const url = `${THEMOVIEDB_API}/movie/${filmID}/images`;
  return fetchFromAPI(url);
}

export async function getImages(filmID: number) {
  const url = `${THEMOVIEDB_API}/collection/${filmID}/images`;
  return fetchFromAPI(url);
}

export async function get(genre: string) {
  const urls = Array.from(
    { length: 9 },
    (_, i) =>
      `${THEMOVIEDB_API}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
        i + 1
      }&sort_by=popularity.desc&with_genres=${genre}`
  );
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getActors(filmID: string) {
  const url = `${THEMOVIEDB_API}/movie/${filmID}/credits?language=en-US`;
  return fetchFromAPI(url);
}

export async function getVideos(media: string, filmID: string | string[]) {
  const url = `${THEMOVIEDB_API}/${media}/${filmID}/videos?language=en-US`;
  return fetchFromAPI(url);
}

export async function getSimilarMedia(
  media: string,
  filmID: string | string[]
) {
  const url = `${THEMOVIEDB_API}/${media}/${filmID}/recommendations?language=en-US&page=1`;
  return fetchFromAPI(url);
}

export async function getSeason(serieID: string, season: string) {
  const url = `${THEMOVIEDB_API}/tv/${serieID}/season/${season}?language=en-US`;
  return fetchFromAPI(url);
}

export async function getMedias(type: string) {
  const topRated = await getTopRated(type);
  const drama = await getGenres(type, "18");
  const action = await getGenres(type, type === "movie" ? "28" : "10759");
  const animation = await getGenres(type, "16");
  const comedy = await getGenres(type, "35");
  const documentary = await getGenres(type, "99");
  const trends = await getNowPlaying(type);
  return { topRated, drama, action, animation, comedy, documentary, trends };
}
