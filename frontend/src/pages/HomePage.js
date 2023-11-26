import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestTemplate from "../components/RestTemplate";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]);
  const [italianRestaurants, setItalianRestaurants] = useState([]);
  const [japaneseRestaurants, setJapaneseRestaurants] = useState([]);
  const [inputInFocus, setinputInFocus] = useState(false);


const placeholderText = inputInFocus ? "Search Top Rated Restaurants" : "Search Restaurants, Cuisines";

const handleSearchInputFocus = () => {
  setinputInFocus(true);
};

const handleSearchInputBlur = () => {
  setinputInFocus(false);
};

const searchAction = useCallback(async () => {
  if (searchInput.trim() !== '') {
    const response = await fetch(
      `http://localhost:8000/RestaurantApp/search/?q=${encodeURIComponent(
        searchInput
      )}&field=name`
    );
    const data = await response.json();

    navigate("/searchpage", { state: { query: searchInput, results: data } });
  } else {
    //Navigate to search results of top-rated restaurants when search input is empty
    navigate("/searchpage");
  }
}, [navigate, searchInput]);


const onRoundSearchContainerClick = useCallback(() => {
  searchAction();
}, [searchAction]);

const onFesearchClick = useCallback(() => {
  searchAction();
}, [searchAction]);

const handleEnter = useCallback(
  (e) => {
    if (e.key === "Enter") {
      searchAction();
    }
  },
  [searchAction]
);

  const onInitialOptionsContainerClick = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);


  const fetchTopRatedRestaurants = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/RestaurantApp/search/?q=4.9&field=average_review_rating"
      );
      const data = await response.json();
      setTopRatedRestaurants(data.slice(9, 13));
    } catch (error) {
      console.error("Error fetching top-rated restaurants:", error);
    }
  }, []);

  const fetchItalianRestaurants = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/RestaurantApp/search/?q=italian&field=name");
      const data = await response.json();
      setItalianRestaurants(data.slice(5, 9));
    } catch (error) {
      console.error("Error fetching Italian restaurants:", error);
    }
  }, []);

  const fetchJapaneseRestaurants = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/RestaurantApp/search/?q=japanese&field=name");
      const data = await response.json();
      setJapaneseRestaurants(data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching Japanese restaurants:", error);
    }
  }, []);

  useEffect(() => {
    fetchTopRatedRestaurants();
    fetchItalianRestaurants();
    fetchJapaneseRestaurants();
  }, [fetchTopRatedRestaurants, fetchItalianRestaurants, fetchJapaneseRestaurants]);


  return (
    <div className="homepage">
      <div className="top">
        <div className="mainframe" />
        <div className="search-bar">
          <img className="search-bar-child" alt="" src="/rectangle-4.svg" />
          <div className="round-search" onClick={onRoundSearchContainerClick}>
            <img className="round-search-child" alt="" src="/ellipse-1.svg" />
            <button className="fesearch" onClick={onFesearchClick}>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </button>
          </div>
          <input
            className="search-restaurants-cuisines"
            placeholder={placeholderText}
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            onKeyDown={(e) => handleEnter(e)}
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
          <div className="restaurant-1-1" />
          <div className="titlelogo3">
            <img className="reservify-icon3" alt="" src="/reservify1.svg" />
            <img
              className="restaurant-1-icon3"
              alt=""
              src="/restaurant-1@2x.png"
            />
          </div>
          <div
            className="initial-options"
            onClick={onInitialOptionsContainerClick}
          >
            <img
              className="bxbxs-user-circle-icon"
              alt=""
              src="/bxbxsusercircle.svg"
            />
          </div>
        </div>
      </div>
      <div className="top-rated">
        <img
          className="top-rated-restaurants"
          alt=""
          src="/top-rated-restaurants.svg"
        />
        <img className="top-rated-line" alt="" src="/rectangle-68.svg" />
        
        
        {topRatedRestaurants.map((restaurant, index) => (
          <RestTemplate
            key={index}
            restaurant={restaurant}
            restaurantName={restaurant.name}
            averageRating={restaurant.ave_rating}
            imageDimensionCode={restaurant.imageNum} 
            culturalOrigin={restaurant.cuisine}
            address={restaurant.location}
            propLeft={`${15.5 + index * 309}px`} 
            propHeight="4.12%"
            propBottom="30.88%"
            propWidth="44px"
           
          />
        ))}
          
      </div>
      <div className="italian">
        <img className="cuisine-title-line" alt="" src="/rectangle-68.svg" />
        {italianRestaurants.map((restaurant, index) => (
          <RestTemplate
            key={index}
            restaurant={restaurant}
            restaurantName={restaurant.name}
            averageRating={restaurant.ave_rating}
            imageDimensionCode={restaurant.imageNum} 
            culturalOrigin="Italian"
            address={restaurant.location}
            propLeft={`${15.5 + index * 309}px`}
            propHeight="4.12%"
            propBottom="30.88%"
            propWidth="44px"
          

          />
        ))}
        <b className="italian-cuisine">Italian Cuisine</b>
      </div>
      <div className="japanese">
        <img className="cuisine-title-line" alt="" src="/rectangle-681.svg" />
        {japaneseRestaurants.map((restaurant, index) => (
          <RestTemplate
            key={index}
            restaurant={restaurant}
            restaurantName={restaurant.name}
            averageRating={restaurant.ave_rating}
            imageDimensionCode={restaurant.imageNum} 
            culturalOrigin="Japanese"
            address={restaurant.location}
            propLeft={`${15.5 + index * 309}px`}
            propHeight="4.12%"
            propBottom="30.88%"
            propWidth="75px"
          

          />
        ))}
        <b className="japanese-cuisine">Japanese Cuisine</b>
      </div>
      <img className="footer-icon" alt="" src="/footer.svg" />
    </div>
  );
};

export default HomePage;
