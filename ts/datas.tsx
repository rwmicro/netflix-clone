import { FilmPoster, ImageTMDB, Actors } from "./Types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA`,
  },
};

const fetchFromAPI = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export async function getTopRated(media:string) {
  const urls = [`https://api.themoviedb.org/3/${media}/top_rated?language=en-US&page=1`];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getGenres(media:string,genre: string) {
  const urls = [`https://api.themoviedb.org/3/discover/${media}?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getPopular(){
  const urls = ["https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"];
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getMedia(media:string, filmID: string) {
  const url = `https://api.themoviedb.org/3/${media}/${filmID}?append_to_response=images`;
  return fetchFromAPI(url);
}

export async function getData(filmID: string) {
  const url = `https://api.themoviedb.org/3/movie/${filmID}/images`;
  return fetchFromAPI(url);
}

export async function getImages(filmID: number){
  const url = `https://api.themoviedb.org/3/collection/${filmID}/images`;
  return fetchFromAPI(url);
}

export async function get(genre: string) {
  const urls = Array.from({ length: 9 }, (_, i) => `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i + 1}&sort_by=popularity.desc&with_genres=${genre}`);
  const data = await Promise.all(urls.map(fetchFromAPI));
  return data.map((d) => d.results);
}

export async function getActors(filmID: string){
  const url = `https://api.themoviedb.org/3/movie/${filmID}/credits?language=en-US`;
  return fetchFromAPI(url);
}

export async function getVideos(media:string,filmID: string | string[]) {
  const url = `https://api.themoviedb.org/3/${media}/${filmID}/videos?language=en-US`;
  return fetchFromAPI(url);
}

export async function getSimilarMedia(media:string, filmID: string | string[]){
  const url = `https://api.themoviedb.org/3/${media}/${filmID}/recommendations?language=en-US&page=1`;
  return fetchFromAPI(url);
}

export async function getSeason(serieID:string,season:string){
  const url = `https://api.themoviedb.org/3/tv/${serieID}/season/${season}?language=en-US`;
  return fetchFromAPI(url);
}
