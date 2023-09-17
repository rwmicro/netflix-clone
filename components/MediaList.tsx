import { useState, useEffect } from "react";
import Loading from "./Loading";
import { getTopRated, getGenres } from "../ts/datas";
import { FilmPoster } from "../ts/Types";
import ThumbnailHandler from "./ThumbnailHandler";

export default function MediaList({ type}) {
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
      getTopRated(type),
      getGenres(type,"18"),
      getGenres(type,"10759"),
      getGenres(type,"16"),
      getGenres(type,"35"),
      getGenres(type,"99"),
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
  return (
    <>
      <div className="text-white overflow-clip -mt-28">
        <div className="ml-20 pb-20">
          <ThumbnailHandler title={"Top Rated"} datas={topRated} type={type} />
          <ThumbnailHandler title={"Action"} datas={action} type={type}/>
          <ThumbnailHandler title={"Animation"} datas={animation} type={type}/>
          <ThumbnailHandler title={"Comedy"} datas={comedy} type={type}/>
          <ThumbnailHandler title={"Drama"} datas={drama} type={type}/>
          <ThumbnailHandler title={"Documentary"} datas={documentary} type={type}/>
        </div>
      </div>
    </>
  );
}

/*

*/
