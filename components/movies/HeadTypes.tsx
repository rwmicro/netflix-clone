import React from "react";
import Link from "next/link";
import Loading from "../loading/Loading";
import media from "public/assets/img/tools/media.png";
import infos from "public/assets/img/tools/informations.png";
import Header from "../main/Header";

import Mute from "../general/MutedTrailer";
import Image from "next/image";

import background from "../../public/assets/img/films/header/background.jpg";

function HeadFilms ({film}) {

  if (!film) return <Loading />;

  return (
    <>
      <Header />

      <div
        className="h-[75vh] xl:h-[90vh] w-full bg-cover bg-center bg-no-repeat mask overflow-hidden"
        style={{
          background: `url(${background.src})`,
        }}
      >
        <div className="absolute bottom-1/3 2xl:top-96 w-3/4 text-white lg:bottom-36 left-10 lg:left-20 xl:left-22">
          <Image
            src="/assets/img/films/header/logo.png"
            height={100}
            width={350}
            alt="logo"
          />
          <p className="w-2/3 xl:w-2/4 mb-8 mt-3 text-sm lg:text-base xl:text-xl">
            {film ? film["overview"] : ""}
          </p>
          <div className="flex gap-2">
            <div>
              <Link
                href={'/watch/'+ film['id'].toString()}
                as={`/watch/${film["title"]}`}
                className="flex align-center items-center justify-center h-10 xl:h-auto w-32 xl:w-44 rounded-md bg-white text-black font-semibold xl:p-3 text-sm xl:text-xl hover:bg-slate-200"
              >
                <Image
                  src={media}
                  className="h-5 w-5 xl:w-7 xl:h-7 mr-2"
                  alt="media"
                />
                <span>Watch now</span>
              </Link>
            </div>
            <div>
              <Link
                href={'/movies?movie='+ film['id'].toString()}
                className="flex align-center items-center justify-center h-10 xl:h-auto w-32 xl:w-44 rounded-md text-white bg-[#1C1917] font-semibold xl:p-3 text-sm xl:text-xl hover:brightness-[.90]"
              >
                <Image
                  src={infos}
                  width={40}
                  height={40}
                  className="h-5 w-5 xl:w-7 xl:h-7 mr-2"
                  alt="media"
                />
                <span>More infos</span>
              </Link>
            </div>
          </div>
          <div className="flex gap-2 mt-4 xl:mt-6 text-neutral-400">
            {film["genres"].map((genre, key) => (
              <div key={key} className="text-sm font-semibold">• {genre["name"]} </div>
            ))}
            <span className="text-sm font-semibold">•</span>
          </div>
        </div>

        <div className="absolute bottom-96 xl:bottom-72 right-0 flex gap-3 items-center">
              <Mute />
          <h1 className="bg-black/50 border-l-4 text-xl p-1.5 xl:p-3 pr-8 xl:pr-10 text-white font-normal lg:text-xl xl:text-2xl">
            16+
          </h1>
        </div>
      </div>
    </>
  );
};

export default React.memo(HeadFilms);



/*
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: videoId,
                provider: provider,
              },
            ],
          }}
          options={videoOptions}
        />
      <div className="absolute -top-7 left-0 flex align-center justify-center w-full h-screen -z-50">

        </div>
        */
