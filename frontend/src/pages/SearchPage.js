import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchPage.css";
import Stars from "../components/Stars";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onReserveBtnContainerClick = useCallback((restaurant) => {
    console.log(restaurant);
    navigate(`/reservepage/${restaurant.name}`, { state: { restaurant } });
  }, [navigate]);

  const onRoundSearchContainerClick = useCallback(() => {
    fetch(`http://localhost:8000/RestaurantApp/search/?q=${query}&field=name`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => console.error('Error fetching search results:', error));
  }, [query]);

  const onBxbxsUserCircleIconClick = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  useEffect(() => {
    if (location.state && location.state.query) {
      setQuery(location.state.query);
  
      fetch(`http://localhost:8000/RestaurantApp/search/?q=${encodeURIComponent(location.state.query)}&field=name`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => console.error('Error fetching search results:', error));
    } else {
      fetch('http://localhost:8000/RestaurantApp/search/?q=4.9&field=average_review_rating')
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => console.error('Error fetching top-rated restaurants:', error));
    }
  }, [location.state]);
  

  return (
    <div className="searchpage">
      <div className="mainframe1" />
        <div className="restaurant-container" > 
          <div className="restaurant-1-parent">
          {results.map((restaurant, index) => (
            <div className="restaurant" key={index}>
            <div className="property-col" />
            <img className="property-col-icon" alt="" src={restaurant.imageNum}/>
            <div className="reserve-btn" onClick={() => onReserveBtnContainerClick(restaurant)}>
              <div className="reserve-btn-child" />
              <b className="reserve">Reserve</b>
            </div>
            <b className="restaurant-name">{restaurant.name}</b>
            <div className="restaurant-location">{restaurant.location}</div>
            <Stars aveRating={restaurant.ave_rating}/>
          </div>
        ))}
        </div>
      </div>
      <b className="results-found">{results.length} Results Found</b>
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="main-header3">
        <div className="homepagebtn4">
          <img
            className="search-icon"
            alt=""
            src="/search-icon.svg"
            onClick={onSearchIconClick}
          />
        </div>
        <div className="userdashbtn4">
          <img
            className="bxbxs-user-circle-icon1"
            alt=""
            src="/bxbxsusercircle.svg"
            onClick={onBxbxsUserCircleIconClick}
          />
        </div>
      </div>
      <div className="titlelogo4">
        <img className="reservify-icon4" alt="" src="/reservify1.svg" />
        <img className="restaurant-1-icon4" alt="" src="/restaurant-1@2x.png" />
      </div>
      {/*<img className="footer-icon" alt="" src="/footer1.svg" />*/}
    
    </div>
  );
};

export default SearchPage;
