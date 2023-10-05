"use client";
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
  useEffect(() => {
    const containers = document.querySelectorAll(
      ".thumbnail_container .thumbnail"
    );

    const handleMouseEnter = (e) => {
      const aElement = e.currentTarget;
      const divElement = e.currentTarget.querySelector(".thumbnail_pop");
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

    const slidesContainer = document.querySelectorAll("#slides-container");

    slidesContainer.forEach((container) => {
      const prevArrow = container.querySelector("#slide-arrow-prev");
      prevArrow.addEventListener("click", () => prevButton(container));

      const nextArrow = container.querySelector("#slide-arrow-next");
      nextArrow.addEventListener("click", () => nextButton(container));
    });

    function nextButton(container) {
      const slide = container.querySelector(".slide");
      const prev = container.querySelector("#slide-arrow-prev");
      const slideWidth = slide.clientWidth;
      if (container.style.marginLeft != "0") {
        container.style.marginLeft = "0px";
        container.style.transition = "ease-in";
        container.style.transitionDuration = "400ms";
        prev.style.display = "block";
      }
      container.scrollLeft += (slideWidth - 10) * 3;
    }
    function prevButton(container) {
      const slide = container.querySelector(".slide");
      const slideWidth = slide.clientWidth;
      if (container.style.marginLeft != "0") {
        container.style.marginLeft = "0px";
        container.style.transition = "ease-in";
        container.style.transitionDuration = "400ms";
      }
      container.scrollLeft -= (slideWidth - 10) * 3;
    }

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
      <h1 className="text-md xl:text-3xl tracking-wide mt-8 xl:mt-12 mb-2 xl:mb-3 ml-10 xl:ml-20">
        {title}
      </h1>
      <div
        className="flex w-fit overflow-x-scroll h-30 gap-2 scroll-smooth thumbnail_container ml-10 xl:ml-20"
        id="slides-container"
      >
        <button
          className="absolute left-0 text-7xl hover:bg-black/30 h-32 xl:h-40 w-16 z-[101] hidden"
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
                index === 0 ? "bg-neutral-500" : "bg-neutral-700"
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
