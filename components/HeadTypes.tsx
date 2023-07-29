import Link from "next/link";
import Image from "next/image";
import placeholder from "public/assets/img/tools/placeholder.png";
import { Film } from "../ts/Types";


export default function HeadFilms({medium}){

  const film:Film = medium;
  
  if(!film) return (<>error...</>);
  
  var posterFilm = "https://image.tmdb.org/t/p/original/";
  
  return (
    <>
      <div
        className="absolute h-screen brightness-75 w-full top-0 left-0 -z-10"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url('" + posterFilm +  film['backdrop_path'] + "')"
        }}
      ></div>
        <div className="h-screen pt-72 ml-20 text-white">
          <div className="flex">
            <div className="w-1 h-8 mr-2 bg-redflix"></div>
            <h2 className="text-2xl">DC Comics</h2>
          </div>
          <h1 className="text-6xl font-bold mt-5">{film ? film['title'] : `` }</h1>
          <p className="w-1/3 mb-8">{film ? film['overview'] : ""}</p>
          <Link
            href={{
              pathname: "Films/[film]",
              query: "",
            }}
            as={"Films/" }
            className="rounded-full bg-redflix p-3 text-xl font-normal"
          >
            Watch now
          </Link>
          <h1 className="text-3xl font-semibold mt-20">Overview</h1>
          <div className="flex gap-5 mt-4">
            <Image src={placeholder} alt="Picture of the author" width={325} height={325} className="rounded-xl" />
            <Image src={placeholder} alt="Picture of the author" width={325} height={325} className="rounded-xl" />
            <Image src={placeholder} alt="Picture of the author" width={325} height={325} className="rounded-xl" />
          </div>
        </div>
    </>
  );
}

/*
  const Images: Promise<ImageTMDB> = getImages(film['id']);

  var [images, setImages] = useState<Array<ImageTMDB>>();

  useEffect(() => { 
    Images.then(function (result) {
      return setImages(result);
    });
  }, []); 

console.log(images);
          {images.length !> 1 || images['success'] !== true ?
              images.map((image) => (
                <Image src={posterFilm + image.backdrops['file_path']} alt="Picture of the author" width={500} height={500} />
              )) 
            : ""}



  */