import { useState, useEffect } from "react";
import Loading from "./Loading";
import { getTopRated, getGenreMovies } from "../ts/datas";
import { FilmPoster } from "../ts/Types";
import ThumbnailHandler from "./ThumbnailHandler";

export default function MediaList() {
  const [topRated, setTopRated] = useState<Array<Array<FilmPoster>>>(null);
  const [action, setAction] = useState<Array<Array<FilmPoster>>>(null);
  const [animation, setAnimation] = useState<Array<Array<FilmPoster>>>(null);
  const [comedy, setComedy] = useState<Array<Array<FilmPoster>>>(null);
  const [documentary, setDocumentary] =
    useState<Array<Array<FilmPoster>>>(null);
  const [drama, setDrama] = useState<Array<Array<FilmPoster>>>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getTopRated(),
      getGenreMovies("18"),
      getGenreMovies("28"),
      getGenreMovies("16"),
      getGenreMovies("35"),
      getGenreMovies("99"),
    ])
      .then(
        ([
          topRatedData,
          dramaData,
          actionData,
          animationData,
          comedyData,
          documentaryData,
        ]) => {
          setTopRated(topRatedData);
          setDrama(dramaData);
          setAction(actionData);
          setAnimation(animationData);
          setComedy(comedyData);
          setDocumentary(documentaryData);
          setLoading(false);
        }
      )
      .catch((err) => {
        console.error("An error occurred:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  console.log(action);
  return (
    <>
      <div className="text-white overflow-clip -mt-28">
        <div className="ml-20 pb-20">
          <ThumbnailHandler title={"Top Rated"} datas={topRated} />
          <ThumbnailHandler title={"Action"} datas={action} />
          <ThumbnailHandler title={"Animation"} datas={animation} />
          <ThumbnailHandler title={"Comedy"} datas={comedy} />
          <ThumbnailHandler title={"Drama"} datas={drama} />
          <ThumbnailHandler title={"Documentary"} datas={documentary} />
        </div>
      </div>
    </>
  );
}

/*

*/
