import React from 'react';
import Appstore from "../../../images/Appstore.png"; 
import playstore from "../../../images/playstore.png"; 
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={Appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>CARZONE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; SHSRgroups</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/carzone_0000/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCG73arnTYY1gLAhDKBDiseQ">Youtube</a>
        <a href="https://www.facebook.com/Carzone-109102838208367">Facebook</a>
      </div>
    </footer>
    )
}

export default Footer
