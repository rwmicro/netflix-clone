import { Film, ImageTMDB } from "./Types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA",
  },
};


export async function getFilmsList(): Promise<Array<Film>> {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const filmsList: Promise<Array<Film>> = new Promise<Array<Film>>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
      });
  });
  return filmsList;
}

export async function getFilm(filmID:String): Promise<Film> {
  const url =
   "https://api.themoviedb.org/3/movie/"+filmID

   const filmsList: Promise<Film> = new Promise<Film>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
        console.log(err)
      });
  });
  return filmsList;
}

export async function getImages(filmID:Number): Promise<ImageTMDB> {
  const url = "https://api.themoviedb.org/3/collection/"+filmID+"/images"

  const filmsList: Promise<ImageTMDB> = new Promise<ImageTMDB>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
      });
  });
  return filmsList;
}