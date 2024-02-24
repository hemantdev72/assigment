import React from "react";
import "./styles/Post.scss";
import Rating from "react-rating";
import { FaAngleDown } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

function Post({ no, heading1, desc1, desc2, rating, rate, star, isNew }) {
  return (
    <div className="post-sec">
      <p className="post-no">{no}</p>
      {isNew && (
        <div className="badge">
          <IoTrophyOutline className="badge-icon" />
          <p className="badge-text">Best Choice</p>
        </div>
      )}
      <div className="post-img">
        <img src="../src/assets/post-img.png" alt="" />
      </div>
      <div className="post-desc">
        <p className="desc-body">
          <span className="desc-heading">{heading1}</span> {desc1}
        </p>
        <span className="desc-heading">Main highlights</span>
        <p className="desc-body description">{desc2}</p>
        {no === 4 && (
          <>
            <div className="desc2">
              <p className="desc2-no">
                <span className="desc2-rate">9.9</span>Building Responsive
              </p>
              <p className="desc2-no">
                <span className="desc2-rate">8.9</span>Cool
              </p>
              <p className="desc2-no">
                <span className="desc2-rate">8.9</span>Docs
              </p>
            </div>
            <p className="desc2-title">Why We Love It</p>
            <div className="desc-input">
              <p className="desc2-menu">
                <span className="desc2-tick">
                  <FaCircleCheck />
                </span>
                Documentaion
              </p>
              <p className="desc2-menu">
                <span className="desc2-tick">
                  <FaCircleCheck />
                </span>
                Easy to Use
              </p>
              <p className="desc2-menu">
                <span>
                  <FaCircleCheck className="desc2-tick" />
                </span>
                Out of Box
              </p>
            </div>
          </>
        )}
        <button className="show-btn">
          show more
          <span>
            <FaAngleDown />
          </span>
        </button>
      </div>
      <div className="post-rating">
        <div className="rating-top">
          <p className="rating-no">{rating}</p>
          <p className="rating-text">{rate}</p>
          <Rating
            initialRating={star}
            emptySymbol={<span className="empty-star">&#9734;</span>}
            fullSymbol={<span className="full-star">&#9733;</span>}
            readonly
            className="star-rating"
          />
        </div>
        <button className="rating-btn">View</button>
      </div>
    </div>
  );
}

export default Post;
