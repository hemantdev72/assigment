import React from "react";
import "./styles/Related.scss";

function Related() {
  return (
    <div className="related-card">
      <img className="related-img" src="../src/assets/post-img.png" alt="" />
      <div className="related-offers">
        <p className="offer">20% off</p>
        <p className="offer">Limited time</p>
      </div>
      <p className="related-head">Webbuilder 1</p>
      <p className="related-desc">Computer Modern classic with wix support</p>
      <div className="prices-info">
        <p className="new-price">$39.96</p>
        <p className="old-price">$49.96</p>
        <p className="price-off">(20%off)</p>
      </div>
      <button className="related-btn">View Deal</button>
    </div>
  );
}

export default Related;
