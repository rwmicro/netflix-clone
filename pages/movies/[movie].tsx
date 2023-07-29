import Header from '../../components/Header'
import Details from "../../components/assets/film/Details";
import Popup from "../../components/assets/film/Popup";
import Footer from "../../components/Footer";
import { useEffect, useState } from 'react';
import { getFilm } from '../../ts/datas';
import { useRouter } from 'next/router';
import { Film } from '../../ts/Types';
import Link from 'next/link';
import Image from 'next/image';
import placeholder from "public/assets/img/tools/placeholder.png";


export default function PageFilm(){

  const lienimage = "https://image.tmdb.org/t/p/original";

  const router = useRouter();
  const query = router.query;
  const movie = query.movie;
  
  if(!movie) return;

  const FilmPromise: Promise<Film> = getFilm(movie.toString());
  var [film, setFilm] = useState<Film>();
  useEffect(() => { 
    FilmPromise.then(function (result) {
      return setFilm(result);
    });
  }, []); 
  if(!film) return;
  
  console.log(film)


return (
  <>
  <Header/>
  <div className="h-screen brightness-75 absolute w-full -z-10"  style={
            {
                backgroundSize: "cover",
                backgroundImage:
                  "url('" + lienimage + film.backdrop_path + "')",
              }
        }></div>
         <div className="absolute left-20 bottom-20 text-white">
          <h1 className="text-6xl font-bold mt-5">{film ? film['title'] : `` }</h1>
          <div className='mt-5 mb-5 flex gap-2'>
            <Image src={placeholder} alt="Vote Count" width={20} className="rounded-xl" />
            <span className="text-sm font-semibold">{film['vote_average']} | {film['vote_count']}</span>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film['runtime']}min</span>
            <span className="text-sm font-semibold">•</span>
            <div className='flex gap-2'>
            {film['genres'].map((genre) => (  
              <span className="text-sm font-semibold">{genre['name']}</span>
            ))}
            </div>
            <span className="text-sm font-semibold">•</span>
            <span className="text-sm font-semibold">{film['release_date'].split('-',1)}</span>
          </div>
          <p className="w-1/3 mb-8">{film ? film['overview'] : ""}</p>
          <Link
            href={{
              pathname: "Films/[film]",
              query: "",
            }}
            as={"Films/" }
            className="rounded-full bg-redflix p-3 text-xl font-normal"
          >
            Play now
          </Link>
          <Link
            href={{
              pathname: "Films/[film]",
              query: "",
            }}
            as={"Films/" }
            className="rounded-full bg-redflix p-3 text-xl font-normal"
          >
            Trailer
          </Link>

          <div className='absolute right-24 bottom-10'>
          <h1 className="text-2xl font-semibold mt-20">Posters</h1>
          <div className="flex gap-5 mt-4">
            <Image src={placeholder} alt="Picture of the author" width={150} className="rounded-xl" />
            <Image src={placeholder} alt="Picture of the author" width={150} className="rounded-xl" />
            <Image src={placeholder} alt="Picture of the author" width={150} className="rounded-xl" />
          </div>
        </div>
        </div>
        <div className='h-screen w-full bg-black '></div>
    <Footer />
  </>
);

};
/*
  var temps = film.runtime * 0.016667;
  var heure = temps.toString().slice(0, 1);
  var minutes = (parseInt(temps.toString().slice(2, 4)) * 0.6).toString().slice(0, 2);

*/