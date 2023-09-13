import Header from '../../components/Header'
import Footer from "../../components/Footer";
import { useEffect, useState } from 'react';
import { getFilm } from '../../ts/datas';
import { useRouter } from 'next/router';
import { Film } from '../../ts/Types';
import placeholder from "public/assets/img/tools/placeholder.png";
import Interests from '../../components/movies/interests';
import More from '../../components/movies/More';
import Loading from '../../components/Loading';
import { getActors } from "../../ts/datas";
import { Actors } from "../../ts/Types";
import ActorsComponents from '../../components/movies/Actors';
import HeadMedia from '../../components/movies/HeadMedia';

export default function PageFilm(){

  const thumbnail = "https://image.tmdb.org/t/p/w342";

  const router = useRouter();
  const query = router.query;
  const movieID = query.movie;
  
  if(!movieID) return <Loading />;
  
  var [film, setFilm] = useState<Film>();
  
  
  const filmPromise: Promise<Film> = getFilm(movieID.toString());
  
  var [film, setFilm] = useState<Film>();
  const actorsPromise: Promise<Actors> = getActors(film['id']);
  var [actors, setActors] = useState<Actors>();
  useEffect(() => { 
    filmPromise.then(results => setFilm(results));
    actorsPromise.then(results => setActors(results));
  }, []); 

  if(!film) return <Loading />;
  if(!actors) return <Loading />;


return (
  <>
  <Header/>
        <HeadMedia film={film}/>
        <div className='w-full h-screen bg-black'>
          <More film={film}/>
        <ActorsComponents actors={actors}/>
          <Interests genres={film['genres']}/>
        </div>

    <Footer />
  </>
);
};