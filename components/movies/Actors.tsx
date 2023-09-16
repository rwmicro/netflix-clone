import Image from "next/image";

export default function ActorsComponents({ actors }) {
  var lienimage = "https://image.tmdb.org/t/p/w342";
  return (
    <>    
    <div className="ml-20 mt-10">
      <h1 className="text-4xl mb-5">Cast & Crew</h1>
    <div className="flex gap-3 overflow-auto">
    {actors['cast'].slice(0,9).map((actor) => (
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="relative h-44 w-44">
        <Image src={actor['profile_path'] ? lienimage + actor['profile_path'] : '/assets/img/tools/unknown_user.jpg'} alt={actor['name']} fill style={{objectFit:'cover'}} className="rounded-full"/>
        </div>
        <div>
          <h1 className="text-md font-bold">{actor['name']}</h1>
          <p className="text-neutral-400 text-md">{actor['character']}</p>
          </div>
      </div>
      ))}
      </div>
      </div>
      </>

  );
};
