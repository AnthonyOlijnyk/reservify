import React from "react";
import "./RatingForm.css";

const RatingForm = ({ aveRating }) => {
  const rating = Math.round(aveRating);
  const redStar = "/vector3.svg";
  const greyStar = "/vector2.svg";

  const starElements = [];
  for (let i = 8; i >= 4; i--) {
    const isFilled = i > 8 - rating;
    const starSrc = isFilled ? redStar : greyStar;
    starElements.push(
      <img className={`vector-icon${i}`} key={i} alt="star" src={starSrc} />
    );
  }
  return (
    <div className="rating-box">
      <div className="rating-box-child" />
      {starElements}
      <div className="div4">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">{aveRating}/5</p>
      </div>
    </div>
  );
};

export default RatingForm;
