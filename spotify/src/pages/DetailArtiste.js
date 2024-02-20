import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Popup from "../components/popup";

const DetailArtiste = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/artists`);
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, []);

  const [useralbum, setUseralbum] = useState(null);
  useEffect(() => {
    async function fetchalbum() {
      const response = await fetch(`http://localhost:8000/albums/artist/` + id);
      const data = await response.json();
      setUseralbum(data);
    }
    fetchalbum();
  }, []);

  const navigate = useNavigate();
  function DetailAlbum(id) {
    navigate("/DetailAlbum/" + id);
  }

  return (
    <>
      {userData && useralbum ? (
        <div className="flex">
          <Navicationbar />
          <div className="ContainArt">
            {/*<Topbar />*/}

            <div className="wrap_artist_pic">
              <img src={userData[id - 1].photo}></img>
              <div>
                <div className="wrap_title_desc">
                  <p className="nameArt">{userData[id - 1].name}</p>
                  <p className="Desc">{userData[id - 1].description}</p>
                </div>
              </div>
            </div>

            <div className="wrap_img_album_desc">
              <div className="album_bg">
                <img
                  src={useralbum[0].cover}
                  onClick={() => DetailAlbum(useralbum[0].id)}
                ></img>
              </div>
              <div className="album_desc">
                <p className="album_name">
                  <span className="album_desc_spann">Album : </span>{" "}
                  {useralbum[0].name}
                </p>
                <p className="album_description">
                  <span className="album_desc_spann">Description :</span>{" "}
                  {useralbum[0].description}
                </p>
                <p className="album_popularity">
                  {" "}
                  <span className="album_desc_spann">Popularity :</span>{" "}
                  {useralbum[0].popularity}
                </p>
                <p className="album_release_date">
                  <span className="album_desc_spann">Release date :</span>{" "}
                  {useralbum[0].release_date}
                </p>
              </div>
            </div>
            <div className="pop_bio_btn">
              <button onClick={() => setButtonPopup(true)}> Read More </button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <p className="artist_name_popup">{userData[id - 1].name}</p>
                <p className="Bio">{userData[id - 1].bio}</p>
              </Popup>
            </div>

            <Footer />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailArtiste;