import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiFacebook} from 'react-icons/si'

const Footer = () => {

  return (
   <div className="Footer">
    <div className="flex">
            <div>
                <p className="foottitle">Société</p>
                <p className="footlien">A propos</p>
                <p className="footlien">Offres d'emploi</p>
                <p className="footlien">For the Record</p>
            </div>
            <div>
                <p className="foottitle">Communautés</p>
                <p className="footlien">Espace artistes</p>
                <p className="footlien">Développeurs</p>
                <p className="footlien">Campagnes publicitaires</p>
                <p className="footlien">Investisseurs</p>
                <p className="footlien">Fournisseurs</p>
            </div>
            <div>
                <p className="foottitle">Liens utiles</p>
                <p className="footlien">Assistance</p>
                <p className="footlien">Appli mobile gratuite</p>
            </div>
            <div className="flex">
                <div className="test">
                    <div className="footer_icon_bg"><div className="footicon"><AiOutlineInstagram/></div></div>
                    <div className="footer_icon_bg"><div className="footicon"><AiFillTwitterCircle /></div></div>
                    <div className="footer_icon_bg"><div className="footicon"><SiFacebook /></div></div>
                </div>
            </div>
        </div>
        <hr></hr>
        <p>© 2023 Spotify AB</p>
   </div>
  );
};

export default Footer;