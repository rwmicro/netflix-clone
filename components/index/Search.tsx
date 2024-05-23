function Search() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -mt-44">
        <h1 className="text-white text-center text-3xl 2xl:text-5xl font-bold ">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-xl 2xl:text-2xl text-white mb-1 2xl:mb-3 2xl:mt-3 text-center">
          Watch anywhere, anytime...
        </h2>
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="Type your search ..."
            className="rounded-l-md p-3 2xl:p-4 text-black pl-5 w-72 2xl:w-96 bg-white block"
          ></input>
          <button
            type="submit"
            className="text-white bg-redflix p-3 2xl:p-4 rounded-r-md font-bold w-32 2xl:w-44 hover:bg-redflix/80"
          >
            Rechercher
          </button>
        </div>
        <h2 className="text-white text-center mt-2 text-xl">
          Please enter the name of your favorite film or serie
        </h2>
      </div>
    </>
  );
}

export default Search;
