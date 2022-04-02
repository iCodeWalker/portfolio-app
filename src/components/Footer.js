import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p>
          This site is developed by
          <span className="footer__name"> Vaibhav Kadwey</span>
        </p>
        <p className="footer__copyright">&#169; 2022-2023 Vaibhavkadwey</p>
      </div>
    </div>
  );
}

export default Footer;
