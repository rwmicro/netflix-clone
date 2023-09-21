import { useEffect } from "react";
import { FilmPoster } from "../../ts/Types";
import Thumbnail from "./Thumbnail";
import ThumbnailSeries from "../series/ThumbnailSeries";

interface ThumbnailHandlerProps {
  title: string;
  datas: Array<Array<FilmPoster>>;
  type: string;
}

const ThumbnailHandler: React.FC<ThumbnailHandlerProps> = ({
  title,
  datas,
  type
}) => {
  useEffect(() => {
    const containers = document.querySelectorAll(".thumbnail_container a");

    const handleMouseEnter = (e) => {
      const aElement = e.currentTarget;
      const divElement = e.currentTarget.querySelector("div");
      if (aElement && divElement) {
        aElement.classList.add("show-thumbnail");
        divElement.classList.add("show-details");
      }
    };

    const handleMouseLeave = (e) => {
      const aElement = e.currentTarget;
      const divElement = e.currentTarget.querySelector("div");
      if (aElement && divElement) {
        aElement.classList.remove("show-thumbnail");
        divElement.classList.remove("show-details");
      }
    };

    containers.forEach((container) => {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      containers.forEach((container) => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-wide mt-10 mb-3 ">
        {title}
      </h1>
      <div className="flex w-max gap-2 thumbnail_container">
        {datas.map((element) =>
          element.map((medium) => {
            if(type === "tv"){
              return <ThumbnailSeries key={medium.id.toString()} Medium={medium} />
            }
            return <Thumbnail key={medium.id.toString()} Medium={medium} />
} )
        )}
      </div>
    </>
  );
};

export default ThumbnailHandler;
