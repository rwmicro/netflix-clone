import { Suspense, useEffect, useState } from "react";
import { getSeason } from "../../ts/datas";

import Image from "next/image";
import Link from "next/link";
import Loading from "../Loading";

export default function Episodes({ medium }) {
  const [season, setSeason] = useState<Array<any>>();
  const [value, setValue] = useState<string>(1 + "");

  useEffect(() => {
    if (medium) {
      Promise.all([getSeason(medium.id, value)])
        .then(([seasonData]) => {
          setSeason(seasonData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [value]);

  const POSTER = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="flex flex-col w-full p-10">
        <div className="flex gap-2 justify-between mb-10">
          <h1 className="text-4xl font-semibold text-white">Episodes</h1>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-neutral-800 text-white border border-neutral-600 rounded-md p-2"
          >
            {medium["seasons"].map((season) => {
              if(season["season_number"] == 0) return (<></>)
              if (season["season_number"] == 1) {
                return (
                  <>
                    <option value={season["season_number"]} selected>
                      Season {season["season_number"]}
                    </option>
                  </>
                );
              }
              return (
                <>
                  <option value={season["season_number"]}>
                    Season {season["season_number"]}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <Suspense fallback={<Loading />}>
        {season && (
          <div className="flex flex-col">
            {season["episodes"].map((episode) => (
              <Link href='' className="flex gap-2 items-center border-b border-neutral-800 p-3 hover:bg-neutral-800 rounded-md overflow-hidden">
                <span className="text-neutral-400 text-xl p-2">
                  {episode["episode_number"]}
                </span>
                <div className="flex gap-2 items-center mb-2">
                  <Image
                    src={POSTER + episode["still_path"]}
                    className="w-32 h-20 rounded-md"
                    alt="poster"
                    width={250}
                    height={150}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-white text-xl font-semibold">
                      {episode["name"]}
                    </h1>
                    <span className="text-neutral-400">
                      {episode["overview"]}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </Suspense>
      </div>
    </>
  );
}
