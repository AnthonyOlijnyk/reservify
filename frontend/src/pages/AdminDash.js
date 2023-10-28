import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCardForm from "../components/RestaurantCardForm";
import "./AdminDash.css";

const AdminDash = () => {
  const navigate = useNavigate();

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onEditRestaurantBtn1Click = useCallback(() => {
    navigate("/admin-edit");
  }, [navigate]);

  const onLogoutBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="admin-dash">
      <img className="footer-icon5" alt="" src="/footer2.svg" />
      <div className="main-header-container">
        <div className="main-header7">
          <div className="homepagebtn2">
            <img
              className="search-icon4"
              alt=""
              src="/search-icon1.svg"
              onClick={onSearchIconClick}
            />
          </div>
          <div className="titlelogo8">
            <img className="reservify-icon8" alt="" src="/reservify1.svg" />
            <img
              className="restaurant-1-icon8"
              alt=""
              src="/restaurant-1@2x.png"
            />
          </div>
        </div>
        <div className="settings2">
          <div className="setting-tittles1">
            <div className="enter-restaurant-name">Enter Restaurant Name:</div>
            <div className="enter-restaurant-id">Enter Restaurant ID:</div>
            <div className="enter-address">Enter Address:</div>
            <div className="enter-about">Enter About:</div>
            <div className="enter-cuisine">Enter Cuisine:</div>
          </div>
          <div className="add-new-restaurant">Add New Restaurant</div>
          <div className="changepass-btn1">
            <div className="changepass-btn-item" />
            <div className="delete-restaurant">Change Password</div>
          </div>
          <div className="white-boxes1">
            <div className="white-boxes-child5" />
            <div className="white-boxes-child6" />
            <div className="white-boxes-child7" />
            <div className="white-boxes-child8" />
            <img
              className="white-boxes-child9"
              alt=""
              src="/rectangle-17.svg"
            />
            <div className="white-boxes-child10" />
            <input
              className="enter-about1"
              placeholder="Enter About"
              type="text"
            />
          </div>
          <input
            className="enter-cuisine1"
            placeholder="Enter Cuisine"
            type="text"
          />
          <input
            className="enter-restaurant-name1"
            placeholder="    Enter Restaurant Name"
            type="text"
          />
          <input
            className="enter-restaurant-id1"
            placeholder="Enter Restaurant ID"
            type="text"
          />
          <input
            className="enter-address1"
            placeholder="Enter Address"
            type="text"
          />
        </div>
        <div className="reservations2">
          <RestaurantCardForm restaurantName="Restaurant 3" />
          <RestaurantCardForm restaurantName="Restaurant 2" propTop="278px" />
          <div className="restaurant1">
            <div className="delete-restaurant-btn1">
              <div className="changepass-btn-item" />
              <div className="delete-restaurant">Delete Restaurant</div>
            </div>
            <div
              className="edit-restaurant-btn1"
              onClick={onEditRestaurantBtn1Click}
            >
              <div className="changepass-btn-item" />
              <div className="delete-restaurant">Edit Restaurant</div>
            </div>
            <div className="restaurant11">
              <b className="restaurant-11">Restaurant 1</b>
              <div className="restaurant1-child" />
            </div>
          </div>
          <div className="reservation1">
            <div className="reservation-item" />
            <div className="upcomingline1" />
            <b className="edit-resturants">Edit Resturants</b>
            <div className="restaurant-details">Restaurant Details</div>
          </div>
        </div>
      </div>
      <button className="logout-btn1" onClick={onLogoutBtnClick}>
        <div className="logout-btn-item" onClick={onRectangle16Click} />
        <b className="logout1">LOGOUT</b>
      </button>
    </div>
  );
};

export default AdminDash;
