import React from "react";
import "./HomePageStars.css";

const HomePageStars = ({ aveRating }) => {
  const rating = Math.round(aveRating);
  const redStar = "/vector3.svg";
  const greyStar = "/vector2.svg";

  const starElements = [];
  for (let i = 8; i >= 4; i--) {
    const isFilled = i > 8 - rating;
    const starSrc = isFilled ? redStar : greyStar;
    starElements.push(
      <img className={`star${i}`} key={i} alt="star" src={starSrc} />
    );
  }
  return (
    <div className="homepage-star-rating">
      {starElements}
    </div>
  );
};

export default HomePageStars;
