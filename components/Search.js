import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
import List from "./List";

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
      <div className="search">
       </div>
      <List input={inputText} />
    </div>

    <div className="main-recherche">
        <h1>Bienvenue sur le site de streaming rigflix</h1>
    <div>
      <input type="search" placeholder="Tapez votre recherche ..."></input>
      <button type="submit">Rechercher</button>
    </div>
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