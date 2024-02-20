import React, { useState, useEffect, } from "react";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/artists`);
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, []);


  const [userAlbum, setUserAlbum] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/albums`);
      const data = await response.json();
      setUserAlbum(data);
    }
    fetchData();
  }, []);

  

  const navigate = useNavigate();
 function DetailArtiste(id){
    navigate('/DetailArtiste/'+id);
  }
  function DetailAlbum(id){
    navigate('/DetailAlbum/'+id);
  }

  function Album(){
    navigate('/albums');
  }

  function Artiste(){
    navigate('/artists');
  }

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  return (
    <>
      {userData  && userAlbum? 
      (
        <div>
          {console.log(shuffle(userAlbum))}
          {console.log(shuffle(userData))}
          <div className="flex">
          <h1 className="hometitle">Album</h1>
          <div className="pop_album_btn">
          <button onClick={() => Album()}>Voir tout</button></div>
          </div>
          <div className="HomeAlbum">
          {userAlbum.map((item, index) => index < 5 && (
          <div className="containArtist" onClick={() => DetailAlbum(item.id)}>
            <img src={item.cover} className="photo-album"></img>
            <div className="play">
            </div>
            <h1 className="nameArtiste">{item.name}</h1>
            <p className="Artiste">Album</p>
          </div>
        ))}
        </div>
        <div className="flex">
        <h1 className="hometitle">Artists</h1>
        <div className="pop_album_btn">
        <button onClick={() => Artiste()}>Voir tout</button></div>
        </div>
        <div className="HomeAlbum">
        {userData.map((item, index) => index < 5 && (
          <div className="containArtist" onClick={() => DetailArtiste(item.id)}>
            <img src={item.photo} className="photo-profil"></img>
            <div className="play">
              <img src="">{console.log(item)}</img>
            </div>
            <h1 className="nameArtiste">{item.name}</h1>
            <p className="Artiste">Artiste</p>
          </div>
        ))}
        </div>
      </div>
      ) : (<></>)}
    </>
  );
};

export default Home;