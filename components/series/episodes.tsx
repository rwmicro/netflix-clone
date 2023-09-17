import { useEffect, useState } from "react";
import { getSeason } from "../../ts/datas";

import Image from "next/image";

export default function Episodes({ medium }) {
  console.log(medium);
  const [season, setSeason] = useState<Array<any>>();
  const [value, setValue] = useState<string>(medium.number_of_seasons - 1 + "");

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

  console.log(season);
  const POSTER = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="flex flex-col w-full p-10">
        <div className="flex gap-2 justify-between mb-10">
          <h1 className="text-4xl font-semibold text-white">Episodes</h1>
          <select
            className="bg-neutral-800 text-white border border-neutral-600 rounded-md p-2"
            name="seasonSelect"
          >
            {medium["seasons"].map((season) => {
              if (season == medium.number_of_seasons - 1) {
                return (
                  <>
                    <option
                      onClick={() => setValue(season["season_number"])}
                      selected
                    >
                      Season {season["season_number"]}
                    </option>
                  </>
                );
              }
              return (
                <>
                  <option onClick={() => setValue(season["season_number"])}>
                    Season {season["season_number"]}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        {season && (
          <div className="flex flex-col gap-2">
            {season["episodes"].map((episode) => (
              <div className="flex gap-2 items-center border-b border-neutral-800 mb-3 p-3">
                <span className="text-neutral-400 text-xl p-2">
                  {episode["episode_number"]}
                </span>
                <div className="flex gap-2 items-center">
                  <Image
                    src={POSTER + episode["still_path"]}
                    alt="poster"
                    width={250}
                    height={100}
                    className="w-32 h-20 rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-white text-xl font-semibold">
                      {episode["name"]}
                    </h1>

                    <span className="text-neutral-400">
                      {episode["overview"]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
