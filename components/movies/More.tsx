import Image from "next/image"

const lienimage = "https://image.tmdb.org/t/p/w342";
    
export default function More ({film}) {
    return(<>
    <div className=" text-white">
        <div className="flex pt-20">
        <div className="ml-20 w-72">
            <Image src={lienimage + film['poster_path']} alt={film['title']} width={150} height={200} className="rounded-xl"/>
        </div>
        <div className="w-full ml-20">
        <h1 className="text-5xl font-bold">{film['title']}</h1>
        <div className='mt-5 mb-5 flex gap-3'>
        {film['genres'].map((genre,index:number) => (
            <span className="text-sm font-bold p-3 border rounded-full hover:bg-redflix" key={index}>{genre['name']}</span>
        ))}
        </div>
        <h1 className="text-redflix font-semibold">Language : <span className="text-white uppercase font-thin">{film['original_language']}</span></h1>
        <h1 className="text-redflix font-semibold">Status : <span className="text-white font-thin ">{film['status']}</span></h1>
        <h1 className="text-redflix font-semibold">Production companies : {film['production_companies'].slice(0,3).map((genre,index:number) => (
            <span className="text-sm font-thin text-white" key={index}>{genre['name']}, </span>
        ))}</h1>
        <h1 className="text-redflix font-semibold">Budget : <span className="text-white uppercase font-thin">{film['budget']}$</span></h1>
        <h1 className="font-semibold text-xl mt-5 text-redflix">Overview :</h1>
        <p>{film['overview']}</p>
        </div>
        </div>
        <div>
        </div>
    </div>
    </>)
}