import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="cardboard">
      <div className="images">
      
        <img src={post.urlToImage} alt="image" />
      </div>
      <div className="infomation">
        <p className="title">{post.title}</p>
        <p className="description">{post.description}</p>
      </div>
      <div>
       <button> <Link to={`/article/${post.title}`}>Read more</Link> </button>
        </div>
    </div>
  );
};

export default Card;