import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onRoundSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="home">
        <img className="footer-icon" alt="" src="/footer.svg" />
        <div className="frame">
          <img className="frame-child" alt="" src="/frame-6.svg" />
          <div className="newsletter-group">
            <img
              className="letter-titles-icon"
              alt=""
              src="/letter-titles.svg"
            />
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
        <img className="top-rated-icon" alt="" src="/top-rated.svg" />
        <img className="takeout-icon" alt="" src="/takeout.svg" />
        <img className="recommended-icon" alt="" src="/recommended.svg" />
        <div className="top">
          <img className="top-child" alt="" src="/frame-3.svg" />
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
            <img
              className="round-search-icon"
              alt=""
              src="/roundsearch.svg"
              onClick={onRoundSearchClick}
            />
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
          <img
            className="search-headers-icon"
            alt=""
            src="/searchheaders.svg"
          />
          <div className="for-any-event-locate-your-tab-wrapper">
            <img
              className="for-any-event-locate-your-tab"
              alt=""
              src="/for-any-event-locate-your-table.svg"
            />
          </div>
          <div className="main-header">
            <img
              className="login-button-icon"
              alt=""
              src="/login-button.svg"
              onClick={onLoginButtonClick}
            />
            <img
              className="signup-button-icon"
              alt=""
              src="/signup-button.svg"
              onClick={onSignupButtonClick}
            />
            <img className="reservify-icon" alt="" src="/reservify.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
