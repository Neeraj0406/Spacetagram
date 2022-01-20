/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Card = ({ date, title, explanation, url }) => {
  const [color, setColor] = useState("bisque");

  useEffect(() => {
    if (window.localStorage[date] === "true") {
      setColor("red");
    }
  }, []);

  const changeColor = (date) => {
    if (window.localStorage[date] === "true") {
      setColor("bisque");

      window.localStorage[date] = false;
    } else {
      setColor("red");
      window.localStorage[date] = true;
    }
  };

  return (
    <>
      <div className="card_container container col-md-8 col-lg-6 mt-3 ">
        <div className="card " style={{ width: "100%" }}>
          <img
            src={url}
            className="card-img-top"
            style={{ height: "40vh" }}
            alt="image"
          />

          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <div className="title">
              <p className="card-date">{date}</p>
              <div onClick={() => alert("Title copied")}>
                <CopyToClipboard text={title}>
                  <AiOutlineShareAlt className="share_btn" />
                </CopyToClipboard>
              </div>
            </div>
            <p className="card-text">
              <AiFillHeart
                id="heart"
                onClick={() => changeColor(date)}
                style={{ color: color }}
              />
              {explanation}
            </p>
            <i className="far fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
