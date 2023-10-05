import { Suspense } from "react";
import Loading from "../loading/Loading";
import { getTopRated, getGenres } from "../../ts/datas";
import ThumbnailHandler from "./ThumbnailHandler";

async function getMedias(type: string) {
  const topRated = await getTopRated(type);
  const drama = await getGenres(type, "18");
  const action = await getGenres(type, type === "movie" ? "28" : "10759");
  const animation = await getGenres(type, "16");
  const comedy = await getGenres(type, "35");
  const documentary = await getGenres(type, "99");
  return { topRated, drama, action, animation, comedy, documentary };
}

export async function MediaList({ type }) {
  const { topRated, drama, action, animation, comedy, documentary } =
    await getMedias(type);

  return (
    <>
      <div>
        <Suspense fallback={<Loading />}>
          <div className="text-white -mt-16 xl:-mt-28">
            <div className="pb-20">
              <ThumbnailHandler
                title={"Top Rated"}
                datas={topRated}
                type={type}
              />
              <ThumbnailHandler title={"Action"} datas={action} type={type} />
              <ThumbnailHandler
                title={"Animation"}
                datas={animation}
                type={type}
              />
              <ThumbnailHandler title={"Comedy"} datas={comedy} type={type} />
              <ThumbnailHandler title={"Drama"} datas={drama} type={type} />
              <ThumbnailHandler
                title={"Documentary"}
                datas={documentary}
                type={type}
              />
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default MediaList;
