import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
  const navigate = useNavigate();

  const onReserveBtnContainerClick = useCallback((restaurantName) => {
    navigate(`/reservepage/${restaurantName}`);
  }, [navigate]);

  const onRoundSearchContainerClick = useCallback(() => {
    navigate("/searchpage");
  }, [navigate]);

  const onBxbxsUserCircleIconClick = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="searchpage">
      <div className="mainframe1" />
      <div className="restaurant-1-parent">
        <div className="restaurant-1">
          <div className="property-col" />
          <div className="property-image" />
          <img
            className="property-col-icon"
            alt=""
            src="/property-col@2x.png"
          />
          <b className="don-alfonso-1980">Don Alfonso 1980</b>
          <div className="food-street-toronto">
            100 Food Street, Toronto, CA
          </div>
          <div className="reserve-btn" onClick={() => onReserveBtnContainerClick("Don-Alfonso")}>
            <div className="reserve-btn-child" />
            <b className="reserve">Reserve</b>
          </div>
          <img className="group-icon" alt="" src="/group.svg" />
          <img className="rating-icon" alt="" src="/rating.svg" />
        </div>
        <div className="restaurant-2">
          <div className="property-col" />
          <b className="lenny1">LENNY</b>
          <div className="property-image" />
          <div className="pier-street-toronto1">
            10 Pier Street, Toronto, CA
          </div>
          <div className="property-image2" />
          <img
            className="restaurant-2-child"
            alt=""
            src="/rectangle-40412@2x.png"
          />
          <div className="reserve-btn" onClick={() => onReserveBtnContainerClick("LENNY")}>
            <div className="reserve-btn-child" />
            <b className="reserve1">Reserve</b>
          </div>
          <img className="group-icon1" alt="" src="/group1.svg" />
          <img className="rating2-icon" alt="" src="/rating2.svg" />
        </div>
        <div className="restaurant-3">
          <div className="property-col2" />
          <div className="property-image3" />
          <div className="food-street-toronto1">
            100 Food Street, Toronto, CA
          </div>
          <div className="property-image4" />
          <img
            className="restaurant-3-child"
            alt=""
            src="/rectangle-40413@2x.png"
          />
          <div className="reserve-btn"  onClick={() => onReserveBtnContainerClick("FOMUFUKU")}>
            <div className="reserve-btn-child" />
            <b className="reserve">Reserve</b>
          </div>
          <img className="group-icon2" alt="" src="/group2.svg" />
          <img className="rating-icon1" alt="" src="/rating1.svg" />
          <b className="fomufuku">FOMUFUKU</b>
        </div>
        <div className="restaurant-4">
          <div className="property-col2" />
          <div className="property-image3" />
          <div className="green-avenue-toronto">
            77 Green Avenue, Toronto, CA
          </div>
          <div className="property-image4" />
          <img
            className="restaurant-4-child"
            alt=""
            src="/rectangle-40414@2x.png"
          />
          <b className="fomufuku">LA PAELLA</b>
          <img className="group-icon2" alt="" src="/group2.svg" />
          <div className="reserve-btn3">
            <div className="reserve-btn-child" />
            <b className="reserve">Reserve</b>
          </div>
          <img className="rating-icon1" alt="" src="/rating1.svg" />
        </div>
        <div className="restaurant-5">
          <div className="property-col4" />
          <b className="remezzos">REMEZZO’S</b>
          <div className="property-image7" />
          <div className="bean-street-toronto">90 Bean Street, Toronto, CA</div>
          <div className="property-image8" />
          <img
            className="restaurant-5-child"
            alt=""
            src="/rectangle-40415@2x.png"
          />
          <img className="rating-icon3" alt="" src="/rating3.svg" />
          <img className="group-icon4" alt="" src="/group3.svg" />
          <div className="reserve-btn4" onClick={() => onReserveBtnContainerClick("REMEZZO")}>
            <div className="reserve-btn-child" />
            <b className="reserve">Reserve</b>
          </div>
        </div>
        <div className="restaurant-6">
          <div className="property-col5" />
          <b className="amara">AMARA</b>
          <div className="property-image9" />
          <div className="food-street-toronto2">
            100 Food Street, Toronto, CA
          </div>
          <div className="property-image10" />
          <img
            className="restaurant-6-child"
            alt=""
            src="/rectangle-40416@2x.png"
          />
          <img className="rating-icon4" alt="" src="/rating3.svg" />
          <img className="group-icon5" alt="" src="/group4.svg" />
          <div className="reserve-btn5">
            <div className="reserve-btn-child" />
            <b className="reserve">Reserve</b>
          </div>
        </div>
      </div>
      <b className="results-found">10 Results Found</b>
      <div className="search-bar1">
        <img className="search-bar-item" alt="" src="/rectangle-4.svg" />
        <div className="round-search1" onClick={onRoundSearchContainerClick}>
          <img className="round-search-item" alt="" src="/ellipse-1.svg" />
          <button className="fesearch1">
            <img className="vector-icon2" alt="" src="/vector.svg" />
          </button>
        </div>
        <input
          className="search-restaurants-cuisines1"
          placeholder="Search Restaurants, Cuisines"
          type="text"
        />
      </div>
      <div className="main-header3">
        <div className="header">
          <div className="akar-iconsglobe" />
        </div>
      </div>
      <div className="initial-options1">
        <img
          className="bxbxs-user-circle-icon1"
          alt=""
          src="/bxbxsusercircle.svg"
          onClick={onBxbxsUserCircleIconClick}
        />
        <img
          className="search-icon"
          alt=""
          src="/search-icon.svg"
          onClick={onSearchIconClick}
        />
      </div>
      <div className="titlelogo4">
        <img className="reservify-icon4" alt="" src="/reservify1.svg" />
        <img className="restaurant-1-icon4" alt="" src="/restaurant-1@2x.png" />
      </div>
      <img className="footer-icon1" alt="" src="/footer1.svg" />
    </div>
  );
};

export default SearchPage;
