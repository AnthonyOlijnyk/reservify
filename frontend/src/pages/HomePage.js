import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onRoundSearchContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="top">
        <div className="top-child" />
        <div className="search-bar">
          <img className="search-bar-child" alt="" src="/rectangle-4.svg" />
          <img className="search-icon" alt="" src="/search.svg" />
          <img className="date-icon" alt="" src="/date.svg" />
          <img className="time-icon" alt="" src="/time.svg" />
          <img
            className="number-of-people"
            alt=""
            src="/number-of-people.svg"
          />
          <div className="round-search" onClick={onRoundSearchContainerClick}>
            <img className="round-search-child" alt="" src="/ellipse-1.svg" />
            <button className="fesearch">
              <img className="vector-icon" alt="" src="/vector.svg" />
            </button>
          </div>
          <img className="line-1-stroke" alt="" src="/line-1-stroke.svg" />
          <img className="line-3-stroke" alt="" src="/line-1-stroke.svg" />
          <img className="line-2-stroke" alt="" src="/line-1-stroke.svg" />
        </div>
        <div className="search-input">
          <input
            className="restaurant-occasion-cuisine"
            placeholder="Restaurant, occasion, Cuisine"
            type="text"
          />
          <input className="add-date" placeholder="Add date" type="date" />
          <input className="add-time" placeholder="Add Time" type="text" />
          <input
            className="add-people"
            placeholder="Add People"
            type="number"
          />
        </div>
        <img className="search-headers-icon" alt="" src="/searchheaders.svg" />
        <div className="for-any-event-locate-your-tab-wrapper">
          <img
            className="for-any-event-locate-your-tab"
            alt=""
            src="/for-any-event-locate-your-table.svg"
          />
        </div>
        <div className="main-header2">
          <img
            className="signup-button-icon"
            alt=""
            src="/signup-button.svg"
            onClick={onSignupButtonClick}
          />
          <img className="reservify-icon" alt="" src="/reservify.svg" />
          <img
            className="login-button-icon"
            alt=""
            src="/login-button.svg"
            onClick={onLoginButtonClick}
          />
          <img
            className="restaurant-1-icon"
            alt=""
            src="/restaurant-1@2x.png"
          />
          <img className="restaurant-1-1" alt="" src="/restaurant-1-1@2x.png" />
        </div>
      </div>
      <img className="recommended-icon" alt="" src="/recommended.svg" />
      <img className="homepage-child" alt="" src="/line-18.svg" />
      <img className="takeout-icon" alt="" src="/takeout.svg" />
      <img className="recommended-icon" alt="" src="/top-rated.svg" />
      <div className="frame">
        <img className="frame-icon" alt="" src="/frame-6.svg" />
        <div className="newsletter-group">
          <img className="letter-titles-icon" alt="" src="/letter-titles.svg" />
          <div className="letter-input">
            <img
              className="letter-input-child"
              alt=""
              src="/rectangle-49.svg"
            />
            <img
              className="letter-input-child"
              alt=""
              src="/rectangle-49-stroke.svg"
            />
            <div className="your-email">Your Email...</div>
          </div>
          <img className="send-btn-icon" alt="" src="/send-btn.svg" />
        </div>
      </div>
      <img className="footer-icon" alt="" src="/footer.svg" />
    </div>
  );
};

export default HomePage;
