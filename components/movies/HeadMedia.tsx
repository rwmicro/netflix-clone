import Image from "next/image"
import Link from "next/link"
import YellowStar from 'public/assets/img/tools/yellow_star.png'
import { useEffect,useState } from "react";
import {getData} from '../../ts/datas';
import { ImageTMDB } from '../../ts/Types';
import Loading from "../Loading";

const ORIGINAL_LINK = "https://image.tmdb.org/t/p/original";

export default function HeadMedia({film}){
const postersPromise: Promise<ImageTMDB>  = getData(film['id'].toString());
var [posters, setPosters] = useState<ImageTMDB>();

if(!posters) return <Loading />;

    return(
        <>
         <div className="h-screen relative brightness-75 w-full -z-10 bg-cover bg-center bg-gradient-to-b from-black"
          style={
            {
                backgroundImage:
                  "url('" + ORIGINAL_LINK + film.backdrop_path + "')",
              }
        }></div>
         <div className="absolute left-20 bottom-20 text-white">
          <h1 className="text-6xl font-bold mt-5">{film ? film['title'] : `` }</h1>
          <div className='mt-5 mb-5 flex gap-2'>
            <Image src={YellowStar} alt="Vote Count" width={20} className="rounded-xl" />
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
            className="rounded-xl bg-redflix p-3 text-xl font-normal"
          >
            Play now
          </Link>
          <Link
            href={{
              pathname: "Films/[film]",
              query: "",
            }}
            as={"Films/" }
            className="rounded-xl bg-redflix p-3 text-xl ml-4 font-normal"
          >
            Trailer
          </Link>
        </div>
        <div className='absolute right-24 bottom-20'>
          <h1 className="text-2xl text-white font-semibold mt-20">Posters</h1>
          <div className="flex gap-5 mt-4">
            {posters['backdrops'].slice(0, 4).map((poster) => (
                <Image src={thumbnail + poster['file_path']} alt={film['title'].toString()} width={150} height={150} className="rounded-xl"/>
            ))}
          </div>
        </div>
        </>
    )
}