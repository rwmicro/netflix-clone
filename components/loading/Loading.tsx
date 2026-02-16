import Header from "../main/Header";

export default function Loading() {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="flex flex-col gap-3 animate-pulse mt-28 ml-20">
          <div className="w-32 h-8 2xl:w-44 2xl:h-10 rounded-md bg-neutral-800"></div>
          <div className="flex gap-1">
            <div className="w-60 h-32 2xl:w-72 2xl:h-44 rounded-md bg-neutral-500"></div>
            <div className="w-60 h-32 2xl:w-72 2xl:h-44 rounded-md bg-neutral-600"></div>
            <div className="w-60 h-32 2xl:w-72 2xl:h-44 rounded-md bg-neutral-700"></div>
            <div className="w-60 h-32 2xl:w-72 2xl:h-44 rounded-md bg-neutral-80s0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
