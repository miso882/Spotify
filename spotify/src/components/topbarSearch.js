import React from "react";
import Searchbar from "./search";


const TopbarSearch = () => {

  return (
   <div className="topbar">
    <div className="flex">
       <img></img>
       <img></img>
       <Searchbar />
       <p className="hovertext">Premium</p>
       <p className="hovertext">Assistance</p>
       <p className="hovertext">Télécharger</p>
       <div className="ligne"></div>
       <p className="hovertext">S'inscrire</p>
       <button className="Connect">Se connecter</button>
    </div>
   </div>
  );
};

export default TopbarSearch;