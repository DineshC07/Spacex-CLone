import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="addr-container">
        <p>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
      </div>
      <div className="links-container">
        <a href="https://twitter.com/SpaceX" target="_blank">
          Twitter
        </a>
        <a href="https://www.flickr.com/photos/spacex/" target="_blank">
          Flickr
        </a>
        <a href="https://www.spacex.com/" target="_blank">
          Website
        </a>
      </div>
    </div>
  );
}

export default Footer;
