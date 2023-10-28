import { useCallback } from "react";
import RatingForm from "../components/RatingForm";
import { useNavigate } from "react-router-dom";
import "./AdminEdit.css";

const AdminEdit = () => {
  const navigate = useNavigate();

  const onBxbxsUserCircleIconClick = useCallback(() => {
    navigate("/admin-dash");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="admin-edit">
      <div className="mainframe4">
        <div className="edit">
          <div className="edit1">Edit</div>
        </div>
      </div>
      <img className="footer-icon6" alt="" src="/footer2.svg" />
      <img className="map-image-icon1" alt="" src="/map-image@2x.png" />
      <div className="edit-parent">
        <div className="edit2">
          <div className="edit1">Edit</div>
        </div>
        <div className="about-paragraph1">
          Don Alfonso is the first restaurant in North America from Michelin
          Star Chefs Alfonso and Ernesto Iaccarino serving a menu of Amalfi
          coast Flavours in an interior accented by priceless art. tasting menus
          interpret Italian ingredients through molecular gastronomy, plated in
          vessels custom designed for each specific dish.
        </div>
      </div>
      <b className="about2">ABOUT</b>
      <b className="map3">
        <p className="map4">MAP</p>
      </b>
      <b className="rating2">Rating</b>
      <div className="top-titles1">
        <div className="don-alfonso-1980-parent">
          <b className="don-alfonso-19804">DON ALFONSO 1980</b>
          <div className="edit4">
            <div className="edit1">Edit</div>
          </div>
          <div className="food-street-toronto4">
            100 Food Street, Toronto, CA
          </div>
        </div>
      </div>
      <div className="info-parent">
        <b className="info2">Info</b>
        <div className="edit6">
          <div className="edit1">Edit</div>
        </div>
        <div className="info-box1">
          <div className="info-box-item" />
          <img className="steak-image-icon1" alt="" src="/steak-image@2x.png" />
          <div className="cuisine-italian1">Cuisine: Italian</div>
          <div className="average-cost-502">Average Cost: 50$ pp</div>
          <div className="price-range1">Price range: $$</div>
          <div className="average-cost-502">Average Cost: 50$ pp</div>
        </div>
      </div>
      <RatingForm />
      <div className="admin-edit-inner">
        <div className="frame-container">
          <div className="frame23">
            <div className="active-category">
              <div className="active-line" />
              <div className="about3">About</div>
            </div>
            <div className="info3">Info</div>
            <div className="frame-child2" />
            <div className="map5">Map</div>
            <div className="frame-child3" />
            <div className="rating3">Rating</div>
            <div className="frame-child4" />
            <div className="frame-child5" />
          </div>
        </div>
      </div>
      <div className="main-header8">
        <div className="initial-options3">
          <img
            className="bxbxs-user-circle-icon5"
            alt=""
            src="/bxbxsusercircle.svg"
            onClick={onBxbxsUserCircleIconClick}
          />
          <img
            className="search-icon5"
            alt=""
            src="/search-icon1.svg"
            onClick={onSearchIconClick}
          />
        </div>
        <div className="titlelogo9">
          <img className="reservify-icon9" alt="" src="/reservify1.svg" />
          <img
            className="restaurant-1-icon9"
            alt=""
            src="/restaurant-1@2x.png"
          />
        </div>
      </div>
      <div className="rest-images-parent">
        <div className="rest-images1">
          <img className="res-big-image" alt="" src="/res-big-image@2x.png" />
          <img className="res-image-1" alt="" src="/res-image-1@2x.png" />
          <img className="res-image-2" alt="" src="/res-image-2@2x.png" />
          <img className="res-image-3" alt="" src="/res-image-3@2x.png" />
          <img className="res-image-4" alt="" src="/res-image-4@2x.png" />
          <b className="b">+2</b>
          <div className="more">More</div>
          <b className="photos">Photos</b>
          <div className="frame-frame">
            <div className="frame24" />
          </div>
          <b className="don-alfonso-19805">Don Alfonso 1980</b>
        </div>
        <div className="edit4">
          <div className="edit1">Edit</div>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
