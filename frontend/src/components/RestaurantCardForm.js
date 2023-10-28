import { useMemo } from "react";
import "./RestaurantCardForm.css";

const RestaurantCardForm = ({ restaurantName, propTop }) => {
  const restaurant3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="restaurant3" style={restaurant3Style}>
      <div className="restaurant31">
        <b className="restaurant-31">{restaurantName}</b>
        <div className="restaurant3-child" />
      </div>
      <div className="delete-restaurant-btn-3">
        <div className="delete-restaurant-btn-3-child" />
        <div className="delete-restaurant-btn3">Delete Restaurant</div>
      </div>
      <div className="edit-restaurant-btn3">
        <div className="delete-restaurant-btn-3-child" />
        <div className="delete-restaurant-btn3">Edit Restaurant</div>
      </div>
    </div>
  );
};

export default RestaurantCardForm;
