import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";
import ReactAudioPlayer from "react-audio-player";

const DetailAlbum = () => {
  const { id } = useParams();

  const [useralbum, setUseralbum] = useState(null);
  useEffect(() => {
    async function fetchalbum() {
      const response = await fetch(`http://localhost:8000/albums/` + id);
      const data = await response.json();
      setUseralbum(data);
    }
    fetchalbum();
  }, []);

  const [style, setStyle] = useState("cont");

  const changeStyle = (path) => {
    setStyle(path);
  };

  return (
    <>
      {useralbum ? (
        <div className="flex">
          <Navicationbar />
          <div className="ContainArt">
            <Topbar />

            <div className="wrap_img_desc">
            <div className="album_bg">
              <img src={useralbum.album.cover}></img>
            </div>  
            <div className="wrap_desc_name_album">
              <p className="album_name">{useralbum.album.name}</p>
              <p>{useralbum.album.description}</p>
            </div>
            </div>

            
            {useralbum.tracks.map((item, index) => (
              <div className="flex tracks">
                <p>{item.track_no}</p>
                <ReactAudioPlayer
                  src={style}
                  className="audio"
                  autoPlay={true}
                  muted={true}
                  controls
                />
                <button onClick={() => changeStyle(item.mp3)}>Play</button>
                <img src={useralbum.album.cover} className="tracksimg"></img>
                <p className="trackname">{item.name}</p>
                <p>{item.duration}</p>
                {console.log(item)}
              </div>
            ))}
            <p>{useralbum.album.popularity}</p>
            <p>{useralbum.album.release_date}</p>
            <Footer />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailAlbum;