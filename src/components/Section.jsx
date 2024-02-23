import React, { useState } from "react";
import Post from "./Post";
import "./styles/Section.scss";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import data from "../utils/data";

function Section() {
  const [btn, setBtn] = useState([
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ]);

  return (
    <div className="section">
      <div className="title">
        <h1 className="title-heading">Best Website builders in the US</h1>
        <div className="title-info">
          <div className="right-info">
            <p className="info">
              <span>
                <IoIosCheckmarkCircleOutline />
              </span>
              Last Updated - February 22, 2022
            </p>
            <p className="info">
              <span>
                <IoIosInformationCircleOutline />
              </span>
              Advertising Disclosurre
            </p>
          </div>
          <p className="info">
            Top Relevant
            <span>
              <FaAngleDown />
            </span>
          </p>
        </div>
      </div>
      <div className="links-menu">
        {btn.map((item, index) => (
          <a className="links" href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
      <div className="bread-crumbs">
        <ul className="crumbs">
          <li>
            Home
            <FaAngleRight />
          </li>

          <li>
            Hosting for All <FaAngleRight />
          </li>

          <li>
            Hosting <FaAngleRight />
          </li>

          <li>
            Hosting 6 <FaAngleRight />
          </li>

          <li>Hosting 5</li>
        </ul>
      </div>
      <div className="posts">
        {data.map((post, index) => (
          <Post
            key={index}
            no={post.no}
            heading1={post.heading1}
            desc1={post.desc1}
            desc2={post.desc2}
            rating={post.rating}
            rate={post.rate}
            star={post.star}
            isNew={index === 0 || index === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
