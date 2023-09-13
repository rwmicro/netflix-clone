import { Film, FilmPoster, ImageTMDB,Actors } from "./Types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzY5N2U4M2I4YmI5NGYyNTNlNGQzMjQ2ZWIwNjJlNyIsInN1YiI6IjVlZTRlYjdmYTIxN2MwMDAyMmQxYWJkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6SBCQDBO-go2oHhNIRC0zIAOQIHDdbdOJO1jwiofXA",
  },
};

export async function getFilmPostersList(): Promise<Array<Array<FilmPoster>>> {
  var ret = [];
  for(var i = 1; i < 10; i++){
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+i+'&sort_by=popularity.desc';
    const res = await fetch(url, options)
    if (!res.ok) throw new Error('Failed to fetch data')
    var tmp = res.json()
    tmp.then((results) => {ret.push(results.results);})
  }
  return ret;
}

export async function getFilm(filmID:String): Promise<Film> {
  const url = "https://api.themoviedb.org/3/movie/"+filmID+"&append_to_response=images"

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

export async function getData(filmID:string) {
  const url = "https://api.themoviedb.org/3/movie/"+filmID+"/images";
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
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


export async function getGenreMovies(genre:string): Promise<Array<Array<FilmPoster>>>  {
  var ret = [];
  for(var i = 1; i < 10; i++){
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+i+'&sort_by=popularity.desc&with_genres=' + genre;
    const res = await fetch(url, options)
    if (!res.ok) throw new Error('Failed to fetch data')
    var tmp = res.json()
    tmp.then((results) => {ret.push(results.results);})
  }
  return ret;
}


export async function getActors(filmID:Number): Promise<Actors> {
  const url = 'https://api.themoviedb.org/3/movie/'+filmID+'/credits?language=fr-FR';
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}