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
  type,
}) => {
  let tmp = 0;

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

    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const nextButton = document.getElementById("slide-arrow-next");
    const prevButton = document.getElementById("slide-arrow-prev");

    nextButton.addEventListener("click", (event) => {
      const slideWidth = slide.clientWidth;
      if (slidesContainer.style.marginLeft != "0") {
        slidesContainer.style.marginLeft = "0px";
        slidesContainer.style.transition = "ease-in";
        slidesContainer.style.transitionDuration = "400ms";
        prevButton.style.display = "block";
      }
      tmp++;
      slidesContainer.scrollLeft += (slideWidth - 10) * 3;
    });

    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      tmp--;
      slidesContainer.scrollLeft -= (slideWidth - 10) * 3;
    });

    return () => {
      containers.forEach((container) => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const TABS = datas[0].length / 4;

  return (
    <>
      <h1 className="text-md xl:text-2xl font-semibold tracking-wide mt-8 xl:mt-12 mb-2 xl:mb-3 ml-10 xl:ml-20">
        {title}
      </h1>
      <div
        className="flex w-fit overflow-x-scroll relative gap-2 no-scrollbar scroll-smooth thumbnail_container ml-10 xl:ml-20"
        id="slides-container"
      >
        <button
          className="absolute left-0 text-7xl hover:bg-black/30 h-32 xl:h-40 right-0 w-16 z-[101] hidden"
          id="slide-arrow-prev"
        >
          &#8249;
        </button>

        <button
          className="absolute text-7xl hover:bg-black/20 right-0 w-16 h-32 xl:h-40 brightness-90 z-[101]"
          id="slide-arrow-next"
        >
          &#8250;
        </button>

        <div className="absolute -mt-2 right-5 flex gap-0.5">
          {Array.from({ length: TABS }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-0.5  ${
                index === tmp ? "bg-neutral-500" : "bg-neutral-700"
              }`}
            ></div>
          ))}
        </div>

        {datas.map((element) =>
          element.map((medium) => {
            if (type === "tv") {
              return (
                <ThumbnailSeries key={medium.id.toString()} Medium={medium} />
              );
            }
            return <Thumbnail key={medium.id.toString()} Medium={medium} />;
          })
        )}
      </div>
    </>
  );
};

export default ThumbnailHandler;
