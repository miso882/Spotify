import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

function Searchbar() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("artist");
  const [results, setResults] = useState([]);


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(query)
    console.log(type)
  const response = await fetch(`http://localhost:8000/search?query=${query}&type=${type}`);
  const data = await response.json();

  setResults(data);

  };

  const options = [
    {
      label: "Artist",
      value: "artist"
    },
    {
      label: "Album",
      value: "album"
    },
    {
      label: "Genre",
      value: "genre"
    },
  ]

  const navigate = useNavigate();
 function DetailArtiste(id){
    navigate('/DetailArtiste/'+id);
  }

  function DetailAlbum(id){
    navigate('/DetailAlbum/'+id);
  }


  function DetailGenre(id){
    navigate('/DetailGenre/'+id);
  }



  return (
    <>
    {results ? 
    (
      <div>
    <form class="formsearch"onSubmit={handleSubmit}>
      <input type="text" placeholder="What Do You Want Listen To?" value={query} onChange={handleInputChange} />
      <button type="submit"><div className="search_icon"><IoIosSearch /></div></button>
      <select className="search_select"
        onChange={handleSelectChange}
        value={type}>
        {options?.map((option) => (
          <option value ={option.value}>{option.label}</option>
        ))}
      </select>
    </form>
    {console.log(results.artists)}
    
    <div className="ContainArt">
    {
    results.artists?.map((item, index) => (
          <div className="containArtist" onClick={() => DetailArtiste(item.id)}>
              <img src="">{console.log(item)}</img>
              <img src={item.photo} className="photo-profil"></img>
              <div className="play">
              <img src="">{console.log(item)}</img>
            </div>
              <h1 className="nameArtiste">{item.name}</h1>
            <p className="Artiste">Artiste</p>
          </div>
        ))}
        {
    results.albums?.map((item, index) => (
          <div className="containArtist" onClick={() => DetailAlbum(item.id)}>
              <img src="">{console.log(item)}</img>
              <img src={item.cover} className="photo-profil"></img>
              <div className="play">
              <img src="">{console.log(item)}</img>
            </div>
              <h1 className="nameArtiste">{item.name}</h1>
            <p className="Artiste">Artiste</p>
          </div>
        ))}
         {
      results.genres?.map((item, index) => (
          <div className="containArtist" onClick={() => DetailGenre(item.id)}>
              <img src="">{console.log(item)}</img>
              <img src={item.cover} className="photo-profil"></img>
              <div className="play">
              <img src="">{console.log(item)}</img>
            </div>
              <h1 className="nameArtiste">{item.name}</h1>
            <p className="Artiste">Artiste</p>
          </div>
        ))}
        </div>
</div>
    ) : (
    <form onSubmit={handleSubmit} className="search_bar">
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit"><div className="search_icon"><IoIosSearch /></div></button>
      <select
        onChange={handleSelectChange}
        value={type}>
        {options?.map((option) => (
          <option value ={option.value}>{option.label}</option>
        ))}
      </select>
    </form>)}
  </>
);
}

export default Searchbar;