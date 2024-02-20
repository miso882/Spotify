import React, { useState, useEffect, } from "react";
import {useNavigate} from 'react-router-dom';

const Genres = () => { 
    const [userData, setUserData] = useState(null);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`http://localhost:8000/genres`);
        const data = await response.json();
        setUserData(data);
      }
      fetchData();
    }, []);

    const navigate = useNavigate();
 function DetailGenre(id){
    navigate('/DetailGenre/'+id);
  }
    
  if (userData) {
  return(
    <div className="ContainGen"> 
        {userData.map((item, index) => (
          <div key={index} className="containerGenre" onClick={() => DetailGenre(item.id)}>
            <div className="genreName">{item.name}</div>
          </div>
        ))}
      </div>
  
)};
       
};
export default Genres;