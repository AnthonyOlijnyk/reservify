import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestTemplate from "../components/RestTemplate";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = useState("");

  const onRoundSearchContainerClick = useCallback(() => {
    const searchInput = document.querySelector(".search-restaurants-cuisines").value;
    const jsonData = {searchInput};

    console.log(jsonData)

      fetch("http://localhost:8000/api/homepage", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {console.log(data); })
      .catch(error => {console.error('Error:', error);});

    navigate("/searchpage");
  }, [navigate]);

  const onFesearchClick = useCallback(() => {
    navigate("/searchpage");
  }, [navigate]);

  const onInitialOptionsContainerClick = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);


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
            placeholder="Search Restaurants, Cuisines"
            type="text"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
            
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
      <img className="homepage-child" alt="" src="/line-18.svg" />
      <div className="top-rated">
        <img
          className="top-rated-restaurants"
          alt=""
          src="/top-rated-restaurants.svg"
        />
        <img className="top-rated-child" alt="" src="/rectangle-68.svg" />
        <div className="latest-property-1">
          <img
            className="latest-property-1-child"
            alt=""
            src="/rectangle-72.svg"
          />
          <b className="lenny">LENNY</b>
          <div className="pier-street-toronto">10 Pier Street, Toronto, CA</div>
          <img
            className="latest-property-1-item"
            alt=""
            src="/rectangle-404@2x.png"
          />
          <div className="seafood">Seafood</div>
          <img
            className="rectangle-8-stroke"
            alt=""
            src="/rectangle-8-stroke.svg"
          />
          <img className="rectangle-8-stroke" alt="" src="/rectangle-8.svg" />
          <img className="reserve-icon" alt="" src="/reserve.svg" />
          <img className="heart-icon" alt="" src="/heart.svg" />
        </div>
        <div className="latest-property-2">
          <img
            className="latest-property-1-child"
            alt=""
            src="/rectangle-72.svg"
          />
          <b className="lenny">Imperial Garden</b>
          <div className="pier-street-toronto">313 Bear Road, Toronto, CA</div>
          <img className="five-stars-icon" alt="" src="/five-stars.svg" />
          <img
            className="latest-property-1-item"
            alt=""
            src="/rectangle-4041@2x.png"
          />
          <div className="chinese">Chinese</div>
          <img
            className="rectangle-8-stroke"
            alt=""
            src="/rectangle-8-stroke.svg"
          />
          <img className="rectangle-8-stroke" alt="" src="/rectangle-8.svg" />
          <img className="reserve-icon" alt="" src="/reserve.svg" />
          <img className="heart-icon" alt="" src="/heart.svg" />
        </div>
        <RestTemplate
          restaurantName="Fomofuku"
          dimensionCode="/five-stars.svg"
          imageDimensionCode="/rectangle-4042@2x.png"
          culturalOrigin="Japanese"
          address="1000 Main Street, Toronto, CA"
        />
        <RestTemplate
          restaurantName="La Paella"
          dimensionCode="/fournhalfstars.svg"
          imageDimensionCode="/rectangle-4043@2x.png"
          culturalOrigin="Spanish"
          address="77 Green Avenue, Toronto, CA"
          propLeft="942.5px"
          propHeight="4.15%"
          propBottom="30.85%"
          propWidth="61px"
        />
        <div className="halfstar">
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <div className="halfstar-child" />
        </div>
        <img className="map-btn-icon" alt="" src="/map-btn.svg" />
        <img
          className="fournhalfstars-icon"
          alt=""
          src="/fournhalfstars1.svg"
        />
      </div>
      <div className="italian">
        <img className="italian-child" alt="" src="/rectangle-68.svg" />
        <RestTemplate
          restaurantName="Don Alfonso 1980"
          dimensionCode="/five-stars.svg"
          imageDimensionCode="/rectangle-4044@2x.png"
          culturalOrigin="Italian"
          address="100 Food Street, Toronto, CA"
          propLeft="15.5px"
          propHeight="4.12%"
          propBottom="30.88%"
          propWidth="44px"
        />
        <img
          className="latest-property-21"
          alt=""
          src="/latest-property-2.svg"
        />
        <img
          className="latest-property-21"
          alt=""
          src="/latest-property-2.svg"
        />
        <RestTemplate
          restaurantName="Remezzo’s"
          dimensionCode="/fournhalfstars.svg"
          imageDimensionCode="/rectangle-4045@2x.png"
          culturalOrigin="Italian"
          address="90 Bean Street, Toronto, CA"
          propLeft="324.5px"
          propHeight="4.15%"
          propBottom="30.85%"
          propWidth="44px"
        />
        <RestTemplate
          restaurantName="Amara"
          dimensionCode="/fournhalfstars.svg"
          imageDimensionCode="/rectangle-4046@2x.png"
          culturalOrigin="Italian"
          address="345 Toen Avenue, Toronto, CA"
          propLeft="633.5px"
          propHeight="4.15%"
          propBottom="30.85%"
          propWidth="44px"
        />
        <RestTemplate
          restaurantName="Mario Ristorante"
          dimensionCode="/five-stars.svg"
          imageDimensionCode="/rectangle-4047@2x.png"
          culturalOrigin="Italian"
          address="987 Pode Street, Toronto, CA"
          propLeft="942.5px"
          propHeight="4.12%"
          propBottom="30.88%"
          propWidth="44px"
        />
        <img className="map-btn-icon1" alt="" src="/map-btn1.svg" />
        <b className="italian-cuisine">Italian Cuisine</b>
      </div>
      <div className="top-rated">
        <img className="italian-child" alt="" src="/rectangle-681.svg" />
        <RestTemplate
          restaurantName="Yukashi"
          dimensionCode="/five-stars.svg"
          imageDimensionCode="/rectangle-4048@2x.png"
          culturalOrigin="Japanese"
          address="432 Jane Street, Toronto, CA"
          propLeft="15.5px"
          propHeight="4.12%"
          propBottom="30.88%"
          propWidth="75px"
        />
        <img
          className="latest-property-21"
          alt=""
          src="/latest-property-2.svg"
        />
        <img
          className="latest-property-21"
          alt=""
          src="/latest-property-2.svg"
        />
        <div className="latest-property-2">
          <img
            className="latest-property-1-child"
            alt=""
            src="/rectangle-72.svg"
          />
          <b className="lenny">
            <p className="shoushin1">Shoushin</p>
          </b>
          <img className="five-stars-icon" alt="" src="/five-stars.svg" />
          <img
            className="latest-property-1-item"
            alt=""
            src="/rectangle-4049@2x.png"
          />
          <div className="japanese1">Japanese</div>
          <img
            className="rectangle-8-stroke"
            alt=""
            src="/rectangle-8-stroke.svg"
          />
          <img className="rectangle-8-stroke" alt="" src="/rectangle-8.svg" />
          <img className="reserve-icon" alt="" src="/reserve.svg" />
          <img className="heart-icon" alt="" src="/heart.svg" />
          <div className="pier-street-toronto">900 Lovey Lane, Toronto, CA</div>
        </div>
        <div className="latest-property-8">
          <img
            className="latest-property-1-child"
            alt=""
            src="/rectangle-72.svg"
          />
          <b className="lenny">
            <p className="shoushin1">Ki</p>
          </b>
          <img
            className="fournhalfstars-icon1"
            alt=""
            src="/fournhalfstars.svg"
          />
          <img
            className="latest-property-1-item"
            alt=""
            src="/rectangle-40410@2x.png"
          />
          <div className="japanese2">Japanese</div>
          <img
            className="rectangle-8-stroke"
            alt=""
            src="/rectangle-8-stroke.svg"
          />
          <img className="rectangle-8-stroke" alt="" src="/rectangle-8.svg" />
          <img className="reserve-icon" alt="" src="/reserve.svg" />
          <img className="heart-icon" alt="" src="/heart.svg" />
          <div className="pier-street-toronto">
            654 Deer Street, Toronto, CA
          </div>
        </div>
        <RestTemplate
          restaurantName="Prince Ramen"
          dimensionCode="/fournhalfstars.svg"
          imageDimensionCode="/rectangle-40411@2x.png"
          culturalOrigin="Japanese"
          address="74 Joe Avenue, Toronto, CA"
          propLeft="942.5px"
          propHeight="4.15%"
          propBottom="30.85%"
          propWidth="75px"
        />
        <img className="map-btn-icon" alt="" src="/map-btn2.svg" />
        <img className="japanese-item" alt="" src="/line-18.svg" />
        <b className="japanese-cuisine">Japanese Cuisine</b>
      </div>
      <img className="footer-icon" alt="" src="/footer.svg" />
    </div>
  );
};

export default HomePage;
