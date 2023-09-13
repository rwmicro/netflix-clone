import Link from "next/link";
import Image from "next/image";
import { Film } from "../ts/Types";
import IMDB from 'public/assets/img/tools/imdb.svg';
import { useRouter } from "next/router";
import Loading from "./Loading";
import media from 'public/assets/img/tools/media.png'
import N from 'public/assets/img/tools/N.png'
import ReactPlayer from "react-player/lazy";


export default function HeadFilms({medium}){
  const film:Film = medium;
  if(!film) return <Loading />;

  const router = useRouter();
  const query = router.query;
  
  function setWallpaper(){
    if(router.pathname == "/movies"){
      const filmHeader =  require("public/assets/img/films/wallpapers/joker.jpg");
      return filmHeader.default.src;
    } 
    if(query.wallpaper) return query.wallpaper;
  }
  
  const wallpaper = setWallpaper()
  
  const POSTER = "https://image.tmdb.org/t/p/original/";
  
  const background = wallpaper ? wallpaper : POSTER + film['backdrop_path'];

  return (
    <>
      <div
        className="h-[85vh] w-full" >
          <div className="absolute -top-7 left-0 flex align-center justify-center w-full h-screen -z-50">
<iframe width="1920" height="1080" className="brightness-75"
src="https://www.youtube.com/embed/zAGVQLHvwOY?autoplay=1&mute=1&loop=0&fs=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
>
</iframe>
</div>
        <div className="absolute bottom-44 left-20 w-3/4 text-white">
          <div className="flex mb-36"><Image className="w-8" src={N} alt="N logo"/><span className="text-3xl font-thin mt-2.5 ml-2 ">Films</span></div>
          <div className="flex gap-2">
          <Link href={"https://www.imdb.com/title/" + film.imdb_id} target="_blank" className="-mt-1 w-16">
            <Image src={IMDB} alt="Picture of the author" width={60} height={50} />
          </Link>
            <span className="text-sm font-semibold">{film['vote_average']}</span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film['runtime']}min</span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film['release_date'].split('-',1)}</span>
          </div>
          <h1 className="text-6xl font-bold mt-1">{film['title']}</h1>
          <p className="w-1/3 mb-8 mt-3">{film ? film['overview'] : ""}</p>
          <Link
            href={{
              pathname: "/movies/[movie]",
              query: { movie: film['id'].toString()},
            }}
            as={`/movies/${film['title']}`}
            className="flex w-44 rounded-full bg-white text-black font-semibold p-3 text-xl hover:bg-slate-200"
          >
           <Image src={media} className="w-5 mr-2" alt='media'/> Watch now
          </Link>
          <div className='flex gap-2 mt-4 text-neutral-500'>
            {film['genres'].map((genre) => (  
              <span className="text-sm font-semibold">• {genre['name']} </span>
            ))}
            <span className="text-sm font-semibold">•</span>
          </div>
        </div>
        <div className="absolute bottom-20 right-0 bg-white/20 rounded-l-md text-2xl p-3 pr-8 text-inherit font-semibold">
          <h1>16+</h1>
        </div>
        </div>
    </>
  );
}