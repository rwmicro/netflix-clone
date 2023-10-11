import { lazy, Suspense } from "react";
import Loading from "../loading/Loading";

const ThumbnailHandler = lazy(() => import("./ThumbnailHandler"));

export default function MediaList({ type,mediaData }) {
 const { topRated, drama, action, animation, comedy, documentary, trends } = mediaData;

 return (
    <>
      <div>
        <Suspense fallback={<Loading />}>
          <div className="text-white -mt-16 xl:-mt-28">
            <div className="pb-20">
              <ThumbnailHandler
                title={"Trends of the day"}
                datas={trends}
                type={type}
              />
              <ThumbnailHandler
                title={"Top Rated"}
                datas={topRated}
                type={type}
              />
              <ThumbnailHandler
                title={"Action"}
                datas={action}
                type={type}
              />
              <ThumbnailHandler
                title={"Animation"}
                datas={animation}
                type={type}
              />
              <ThumbnailHandler
                title={"Comedy"}
                datas={comedy}
                type={type}
              />
                            <ThumbnailHandler
                title={"Drama"}
                datas={drama}
                type={type}
              />
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
