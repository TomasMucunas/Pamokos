import React, { useState } from "react";
import "./Card.css";
import bookmarkIcon from "../components/bookmarkicon.jpg";
import bookmarkIconActive from "../components/bookmarkiconactive.png";

const Card = ({ image, title, details }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="show-card">
      <div className="show-card-image">
        <img src={image} alt={title} className="show-card-img" />
      </div>
      <div className="show-card-content">
        <p className="show-card-details">{details}</p>
        <h2 className="show-card-title">{title}</h2>
      </div>
      <button
        className={`show-card-bookmark ${isBookmarked ? "active" : ""}`}
        onClick={handleBookmarkClick}
        title={isBookmarked ? "Remove from Bookmarks" : "Add to Bookmarks"}
      >
        <img
          src={isBookmarked ? bookmarkIconActive : bookmarkIcon}
          alt="Bookmark Icon"
        />
      </button>
    </div>
  );
};

export default Card;
