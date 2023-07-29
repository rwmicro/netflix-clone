type Genre ={
    id: Number;
    name: String;
  }
  
export type Film = {
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
    vote_average: number;
    vote_count: Number;
  }
  
export type ImageTMDB = {
    id: Number;
    backdrops: Array<Object>;
    posters: Array<Object>;
  }

export type FilmPoster = {

}