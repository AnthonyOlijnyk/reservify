import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const onRESERVIFYText1Click = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="search">
      <div className="top-filters">
        <div className="filter-btn">
          <div className="filter-btn-child" />
          <div className="filters">Filters</div>
          <img className="vector-icon4" alt="" src="/vector3.svg" />
        </div>
        <div className="active-filter-1">
          <div className="active-filter-1-child" />
          <img className="vector-icon5" alt="" src="/vector4.svg" />
          <div className="toronto">Toronto</div>
        </div>
        <div className="active-filter-2">
          <div className="active-filter-2-child" />
          <img className="vector-icon6" alt="" src="/vector4.svg" />
          <div className="div">10/26/2023</div>
        </div>
        <div className="active-filter-3">
          <div className="active-filter-3-child" />
          <img className="vector-icon7" alt="" src="/vector4.svg" />
          <div className="italian">Italian</div>
        </div>
        <b className="results-found">10 Results Found</b>
      </div>
      <div className="property-large2">
        <div className="property-col" />
        <div className="property-image2" />
        <img
          className="slider-indicators-icon"
          alt=""
          src="/slider-indicators.svg"
        />
        <div className="host-info2">
          <div className="host-image3" />
          <b className="restaurant-21">Restaurant 2</b>
          <img className="vector-icon8" alt="" src="/vector5.svg" />
        </div>
        <img className="featherheart-icon" alt="" src="/featherheart.svg" />
      </div>
      <div className="property-titles">
        <div className="food-street-toronto1">100 Food Street, Toronto, CA</div>
      </div>
      <div className="i-have-been">
        “I have been to Restaurant 2 many times and I have never been
        disappointed in my experience.”
      </div>
      <div className="search-child" />
      <b className="reserve">Reserve</b>
      <div className="property-large3">
        <div className="property-col" />
        <div className="property-image2" />
        <img className="vector-icon9" alt="" src="/vector5.svg" />
        <img
          className="slider-indicators-icon"
          alt=""
          src="/slider-indicators.svg"
        />
        <div className="host-info2">
          <div className="host-image3" />
          <b className="restaurant-21">
            <p className="restaurant-31">Restaurant 3</p>
          </b>
          <img className="vector-icon8" alt="" src="/vector6.svg" />
          <img className="five-stars-icon2" alt="" src="/five-stars2.svg" />
        </div>
        <img className="featherheart-icon" alt="" src="/featherheart.svg" />
      </div>
      <div className="property-titles1">
        <div className="food-street-toronto1">100 Food Street, Toronto, CA</div>
      </div>
      <div className="i-have-been1">
        “I have been to Restaurant 2 many times and I have never been
        disappointed in my experience.”
      </div>
      <div className="search-item" />
      <b className="reserve1">Reserve</b>
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <img className="five-stars-icon3" alt="" src="/five-stars2.svg" />
      <div className="frame5">
        <div className="news-letter-bg3" />
        <div className="newsletter-group4">
          <div className="letter-titles3">
            <b className="explore-reservify3">EXPLORE RESERVIFY</b>
            <div className="stay-upto-date3">Stay Upto Date</div>
          </div>
          <div className="letter-input4">
            <div className="letter-input-child2" />
            <div className="your-email4">Your Email...</div>
          </div>
          <img className="send-btn-icon4" alt="" src="/send-btn3.svg" />
        </div>
      </div>
      <div className="footer3">
        <div className="footer-bg3" />
        <div className="company3">
          <div className="about-us3">About Us</div>
        </div>
        <div className="contact-info6">
          <b className="contact-info7">CONTACT INFO</b>
          <div className="phone-12345678903">Phone: 1234567890</div>
          <div className="email-reservifyemailcom3">
            Email: reservify@email.com
          </div>
          <div className="location-100-smart3">
            Location: 100 Smart Street, Toronto, CA
          </div>
          <img
            className="social-media-links3"
            alt=""
            src="/social-media-links.svg"
          />
        </div>
        <div className="help-center3">
          <div className="faqs3">FAQs</div>
        </div>
        <div className="copyrights3">
          <div className="reservify-all3">
            © 2023 RESERVIFY | All rights reserved
          </div>
          <div className="line-div" />
        </div>
        <b className="reservify8">RESERVIFY</b>
      </div>
      <div className="main-header6">
        <div className="header5">
          <div className="reservify9" onClick={onRESERVIFYText1Click}>
            RESERVIFY
          </div>
          <div className="akar-iconsglobe5" />
          <div className="home3">Home</div>
          <img className="image-4-icon5" alt="" src="/image-4@2x.png" />
        </div>
        <img
          className="initial-options-icon3"
          alt=""
          src="/initialoptions2.svg"
        />
      </div>
      <div className="search-bar1">
        <div className="search-bar-item" />
        <div className="search1">Search</div>
        <div className="location-restaurant-cuisine">
          Location, Restaurant, Cuisine
        </div>
        <div className="date2">Date</div>
        <div className="add-date1">Add Date</div>
        <div className="time3">
          <p className="restaurant-31">Time</p>
        </div>
        <div className="add-time1">
          <p className="restaurant-31">Add Time</p>
        </div>
        <div className="number-of-people5">Number of People</div>
        <div className="add-people1">Add People</div>
        <img className="round-search-icon" alt="" src="/roundsearch.svg" />
        <div className="search-bar-inner" />
        <div className="search-bar-child1" />
        <div className="search-bar-child2" />
      </div>
      <div className="search-inner">
        <div className="property-large-wrapper">
          <div className="property-large-wrapper">
            <div className="property-large-wrapper">
              <div className="property-col" />
            </div>
            <div className="property-image4" />
            <img
              className="slider-indicators-icon"
              alt=""
              src="/slider-indicators.svg"
            />
            <div className="host-info4">
              <div className="host-image3" />
              <b className="restaurant-21">Restaurant 2</b>
            </div>
            <img
              className="featherheart-icon2"
              alt=""
              src="/featherheart.svg"
            />
          </div>
        </div>
      </div>
      <div className="property-titles2">
        <div className="food-street-toronto1">100 Food Street, Toronto, CA</div>
      </div>
      <div className="amazing-food-and">
        “Amazing food and experience. Staff really went above and beyond to make
        sure it was enjoyable.”
      </div>
      <div className="search-child1" />
      <b className="reserve2">Reserve</b>
      <div className="property-large5">
        <img
          className="property-col-icon2"
          alt=""
          src="/property-col2@2x.png"
        />
        <div className="property-image5" />
        <img
          className="slider-indicators-icon3"
          alt=""
          src="/slider-indicators1.svg"
        />
        <div className="host-info5">
          <div className="host-image6" />
          <b className="don-alfonso-19803">Don Alfonso 1980</b>
          <img className="image-1-icon2" alt="" src="/image-12@2x.png" />
          <img className="five-stars-icon4" alt="" src="/five-stars3.svg" />
        </div>
        <img className="featherheart-icon3" alt="" src="/featherheart1.svg" />
      </div>
      <img className="property-col-icon3" alt="" src="/property-col2@2x.png" />
      <img className="property-col-icon3" alt="" src="/property-col2@2x.png" />
      <div className="sign-in-options">
        <div className="sign-in-options-child" />
        <div className="reservations1">Reservations</div>
        <div className="account-settings">Account Settings</div>
        <div className="logout">Logout</div>
      </div>
      <div className="frame-div" />
    </div>
  );
};

export default Search;
