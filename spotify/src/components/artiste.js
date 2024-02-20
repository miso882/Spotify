import React, { useState, useEffect, } from "react";
import {useNavigate} from 'react-router-dom';
import ReactPaginate from "react-paginate";

const Artistes = () => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 30;
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/artists`);
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, []);

  

  const navigate = useNavigate();
 function DetailArtiste(id){
    navigate('/DetailArtiste/'+id);
  }
  const offset = currentPage * itemsPerPage;
  const currentItems = userData?.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      {currentItems && (
        <div className="ContainArt">
          {currentItems.map((item, index) => (
            <div
              className="containArtist"
              onClick={() => DetailArtiste(item.id)}
              key={item.id}
            >
              <img src={item.photo} className="photo-album" alt="Album Cover" />
              <div className="play"></div>
              <h1 className="nameArtiste">{item.name}</h1>
              <p className="Artiste">Album</p>
            </div>
          ))}
        </div>
      )}
      {userData && (
        <ReactPaginate
          pageCount={Math.ceil(userData.length / itemsPerPage)}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      )}
    </>
  );
};

export default Artistes;