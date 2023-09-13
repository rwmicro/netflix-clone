import { useState } from "react";
// import TextField from "@mui/material/TextField";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="main">
        <div className="search"></div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -mt-44 w-auto">
        <h1 className="text-white text-5xl  font-bold ">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl text-white mb-3 mt-3 text-center">
          Watch anywhere, anytime...
        </h2>
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="Type your search ..."
            className="rounded-l-full p-4 text-black pl-5 w-96 bg-white block
          focus:border-redflix"
          ></input>
          <button
            type="submit"
            className="text-white bg-redflix p-4 rounded-r-full font-bold w-44 hover:bg-red-700"
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

/*

 <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      
        */
