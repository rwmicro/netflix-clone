type Genre ={
    id: Number;
    name: String;
  }
  
export type Film = {
    adult: null;
    backdrop_path: String;
    belongs_to_collection: null;
    budget: Number;
    genres: Array<Genre>;
    homepage: null;
    id: Number;
    imdb_id: String;
    original_language: null;
    original_title: null;
    overview: String;
    poster_path: String;
    production_companies: null;
    production_countries: null;
    release_date: String;
    revenue: Number;
    runtime: Number;
    spoken_languages: null;
    status: null;
    tagline: null;
    title: String;
    video: null;
    vote_average: number;
    vote_count: Number;
  }
export type ImageTMDB = {
    logos: null;
    backdrops: Array<Object>;
    posters: Array<Object>;
  }
export type FilmPoster = {
  id: Number;
  poster_path: String;
}
export type Actors = {
  id: Number;
  cast: Array<Object>;
  crew: null;
}