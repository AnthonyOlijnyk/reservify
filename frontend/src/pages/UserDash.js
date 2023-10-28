import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import "./UserDash.css";

const UserDash = () => {
  const navigate = useNavigate();

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onLogoutBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle13Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="user-dash">
      <img className="footer-icon3" alt="" src="/footer2.svg" />
      <div className="main-header-parent">
        <div className="main-header5">
          <div className="homepagebtn">
            <img
              className="search-icon2"
              alt=""
              src="/search-icon1.svg"
              onClick={onSearchIconClick}
            />
          </div>
          <div className="titlelogo6">
            <img className="reservify-icon6" alt="" src="/reservify1.svg" />
            <img
              className="restaurant-1-icon6"
              alt=""
              src="/restaurant-1@2x.png"
            />
          </div>
        </div>
        <div className="settings">
          <img
            className="bxbxs-user-circle-icon3"
            alt=""
            src="/bxbxsusercircle1.svg"
          />
          <div className="setting-tittles">
            <div className="enter-old-username">Enter Old Username:</div>
            <div className="enter-change-username">Enter Change Username:</div>
            <div className="enter-confirm-username">
              Enter Confirm Username:
            </div>
            <div className="enter-old-password">Enter Old Password:</div>
            <div className="enter-change-password">Enter Change Password:</div>
            <div className="enter-confirm-password">
              Enter Confirm Password:
            </div>
          </div>
          <div className="settings1">Settings</div>
          <img className="settings-child" alt="" src="/line-18.svg" />
          <div className="changeuset-btn">
            <div className="changeuset-btn-child" />
            <div className="change-username"> Change Username</div>
          </div>
          <div className="changepass-btn">
            <div className="changeuset-btn-child" />
            <div className="change-username">Change Password</div>
          </div>
          <div className="white-boxes">
            <div className="white-boxes-child" />
            <div className="white-boxes-item" />
            <div className="white-boxes-inner" />
            <div className="white-boxes-child1" />
            <div className="white-boxes-child2" />
            <div className="white-boxes-child3" />
            <div className="white-boxes-child4" />
          </div>
          <input
            className="enter-old-password1"
            placeholder="Enter Old Password"
            type="text"
          />
          <input
            className="enter-new-password"
            placeholder="Enter New Password"
            type="text"
          />
          <input
            className="enter-new-password1"
            placeholder="Enter New Password"
            type="text"
          />
          <input
            className="enter-old-username1"
            placeholder="Enter Old Username"
            type="text"
          />
          <input
            className="enter-new-username"
            placeholder="Enter New Username"
            type="text"
          />
          <input
            className="enter-new-username1"
            placeholder="Enter New Username"
            type="text"
          />
        </div>
        <div className="reservations">
          <div className="reservation">
            <div className="reservation-child" />
            <div className="upcomingline" />
            <b className="past">Past</b>
            <b className="upcoming">Upcoming</b>
            <div className="settings1">Reservations</div>
          </div>
          <RestaurantCard
            restaurantName="Restaurant 2"
            reservationDate="10/28/2023"
            reservationTime="3:00 PM"
            numberOfPeople=" 2"
          />
          <RestaurantCard
            restaurantName="Restaurant 1"
            reservationDate="10/20/2023"
            reservationTime="1:00 PM"
            numberOfPeople=":4 "
            propTop="159px"
            propWidth="712px"
            propColor="#484848"
            propColor1="rgba(201, 32, 32, 0.8)"
            propWidth1="192px"
          />
        </div>
      </div>
      <button className="logout-btn" onClick={onLogoutBtnClick}>
        <div className="logout-btn-child" onClick={onRectangle13Click} />
        <b className="logout">LOGOUT</b>
      </button>
    </div>
  );
};

export default UserDash;
