import { useMemo } from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({
  restaurantName,
  reservationDate,
  reservationTime,
  numberOfPeople,
  propTop,
  propWidth,
  propColor,
  propColor1,
  propWidth1,
}) => {
  const restaurant2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const restaurant21Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const dateStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const spanStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const numberOfPeopleContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="restaurant2" style={restaurant2Style}>
      <div className="cancelres2">
        <div className="cancelres2-child" />
        <div className="cancel-reservation">Cancel Reservation</div>
      </div>
      <div className="restaurant21" style={restaurant21Style}>
        <b className="restaurant-21">{restaurantName}</b>
        <div className="date-10282023">
          <span className="number-of-people" style={dateStyle}>{`Date: `}</span>
          <span className="span" style={spanStyle}>
            {reservationDate}
          </span>
        </div>
        <div className="time-300-pm-container">
          <span className="number-of-people">{`Time: `}</span>
          <span className="span">{reservationTime}</span>
        </div>
        <div
          className="number-of-people-container"
          style={numberOfPeopleContainerStyle}
        >
          <span className="number-of-people">Number of People</span>
          <span className="span">{numberOfPeople}</span>
        </div>
        <div className="restaurant2-child" />
      </div>
    </div>
  );
};

export default RestaurantCard;
