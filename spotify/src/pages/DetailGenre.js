import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Topbar from "../components/topbar";
import Navicationbar from "../components/navbar";

const DetailGenre = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/genres/` + id);
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchAlbums() {
      if (userData?.albums) {
        const albumPromises = userData.albums.map(async (albumId) => {
          const response = await fetch(`http://localhost:8000/albums/` + albumId);
          return response.json();
        });
        const albums = await Promise.all(albumPromises);
        setAlbumData(albums);
      }
    }
    fetchAlbums();
  }, [userData]);

  

  const navigate = useNavigate();

  function handleAlbumClick(albumId) {
    navigate(`/DetailAlbum/${albumId}`);
  }

  return (
    <>
      {albumData ? (
        <div className="flex">
          <Navicationbar />
          <div className="ContainGen">
            <Topbar />
            <div className="Genretitle">
            <h1>{userData?.genre?.name}</h1>
            </div>
            {albumData.map((album) => (
              <div className="containArtist" key={album.album.id} onClick={() => handleAlbumClick(album.album.id)}>
                <div>
                <img className="photo-album"src={album.album.cover_small}  alt={album.album.name} />
                </div>
                <div>
                <p className="nameArtiste">{album.album.name}</p>
                </div>
              </div>
            ))}
            <Footer />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailGenre;
