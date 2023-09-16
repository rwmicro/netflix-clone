import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { getFilm, getActors } from '../../ts/datas';
import { useRouter } from 'next/router';
import { Film, Actors } from '../../ts/Types';
import placeholder from 'public/assets/img/tools/placeholder.png';
import Interests from '../../components/movies/interests';
import More from '../../components/movies/More';
import Loading from '../../components/Loading';
import ActorsComponents from '../../components/movies/Actors';
import HeadMedia from '../../components/movies/HeadMedia';

export default function PageFilm() {
  const thumbnail = 'https://image.tmdb.org/t/p/w342';
  const router = useRouter();
  const { movie: movieID } = router.query;

  const [film, setFilm] = useState<Film>();
  const [actors, setActors] = useState<Actors>();

  useEffect(() => {
    if (movieID) {
      Promise.all([getFilm(movieID.toString()), getActors(Number(movieID))])
        .then(([filmData, actorData]) => {
          setFilm(filmData);
          setActors(actorData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [movieID]);

  console.log(film);

  if (!film || !actors) return <Loading />;

  // const { genres } = film;

  return (
    <>
      <Header />
      <HeadMedia film={film} />
      <div className="w-full h-screen bg-black">
        <More film={film} />
        <ActorsComponents actors={actors} />
      </div>
      <Footer />
    </>
  );
}

// <Interests genres={genres} />