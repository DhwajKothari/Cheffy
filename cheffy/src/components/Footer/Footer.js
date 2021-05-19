import React from 'react';
import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = (props) => {
      let date = new Date();
      let currentYear = date.getFullYear();
    return (
      <div className="footer">
        <div
          className="footerbar"
          style={{ height: 2, backgroundColor: "#e5e5e5" }}
        ></div>
        <div className="iconContainer">
          <a href="https://github.com/DhwajKothari/Cheffy">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://github.com/DhwajKothari/Cheffy">
            <FacebookIcon className="icon" />
          </a>
          <a href="https://github.com/DhwajKothari/Cheffy">
            <TwitterIcon className="icon" />
          </a>
        </div>
        <p>
          {"Copyright ©" +
            currentYear +
            ", Dhwaj Kothari. All rights reserved."}
        </p>
      </div>
    );
}

export default Footer
