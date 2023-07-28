type Genre ={
  id: Number;
  name: String;
}

type Film = {
  adult: Boolean;
  backdrop_path: String;
  belongs_to_collection: Object;
  budget: Number;
  genres: Array<Genre>;
  homepage: String;
  id: Number;
  imdb_id: String;
  original_language: String;
  original_title: String;
  overview: String;
  poster_path: String;
  production_companies: null;
  production_countries: null;
  release_date: String;
  revenue: Number;
  runtime: Number;
  spoken_languages: null;
  status: String;
  tagline: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}

export type ImageTMDB = {
  id: Number;
  backdrops: Array<Object>;
  posters: Array<Object>;
}

export async function getFilmsList(): Promise<Array<Film>> {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA",
    },
  };

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

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA",
    },
  };

  const filmsList: Promise<Film> = new Promise<Film>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
      });
  });
  return filmsList;
}

export async function getImages(filmID:Number): Promise<ImageTMDB> {
  const url = "https://api.themoviedb.org/3/collection/"+filmID+"/images"

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA",
    },
  };

  const filmsList: Promise<ImageTMDB> = new Promise<ImageTMDB>((resolve, reject) => {
    fetch(url, options)
      .then((res) => resolve(res.json()))
      .catch((err) => {
        reject(err);
      });
  });
  return filmsList;
}