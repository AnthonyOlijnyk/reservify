import {useState, useCallback } from "react";
import {Select,InputLabel,MenuItem,FormHelperText,FormControl,} from "@mui/material";
import {LocalizationProvider,TimePicker,DatePicker,} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import RatingForm from "../components/RatingForm";
import "./ReservePage.css";
import { useUser } from './UserContext'; 
import Cookies from "universal-cookie";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + '/custom-marker-icon.png',
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

const ReservePage = (resturaunt) => {
  const [timeDateTimePickerValue, setTimeDateTimePickerValue] = useState(null);
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);
  const [numpeople, setNumPeople ] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const{restaurant_name} = useParams();
  const navigate = useNavigate();
  const{email}=useUser();

  const location = useLocation();
  const restaurantData = location.state.restaurant;

  const restaurantLongitude = restaurantData.longitude;
  const restaurantLatitude = restaurantData.latitude;
  const restaurantLocation = restaurantData.location;
  const restaurantAbout = restaurantData.about;
  const restaurantCuisine = restaurantData.cuisine;
  const restaurantAveCost = restaurantData.ave_cost;
  const restaurantAveRating = restaurantData.ave_rating;
  const restaurantImageNum = restaurantData.imageNum;

  const handleNumPeopleChange = (event) => {
    setNumPeople(event.target.value); 
  };
  const onReserveNowBtnClick = useCallback(() => {
    const monthNameToNumber = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    const Fulldate = new Date(dateDateTimePickerValue);
    const month = monthNameToNumber[Fulldate.toLocaleString('en-us',{month: 'short'})];
    const day = Fulldate.getDate();
    const year = Fulldate.getFullYear();
    const date = `${year}-${(month).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    const Fulltime = new Date(timeDateTimePickerValue);
    const hours = Fulltime.getHours().toString().padStart(2,'0');
    const min = Fulltime.getMinutes().toString().padStart(2,'0');
    const time = `${hours}:${min}`;
    const start_time = `${date} ${time}`;
    
    const number_of_people = parseInt(numpeople, 10);
    const jsonData = {start_time, number_of_people, restaurant_name};
    const cookies = new Cookies();

    console.log(jsonData)

      fetch("http://localhost:8000/ReservationApp/api/make-reservation", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${cookies.get('jwt')}`},
        body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => 
        {
          if (data.success){
            console.log(restaurantImageNum)
            navigate(`/reservation-confirmation`,{state: {restaurant_name, restaurantImageNum}});
        }
        else
        {
          const errors = Object.entries(data.errors).map(([ key, value ]) => (
            `${(key.charAt(0).toUpperCase() + key.slice(1)).replaceAll('_', ' ')} error: ${value}`
          ));
          console.log(errors);
          setErrorMessages(errors);
        }})
      .catch(error => {console.error('Error:', error);});
  },[navigate, dateDateTimePickerValue, timeDateTimePickerValue, numpeople, email, restaurant_name ,restaurantImageNum, setErrorMessages]);

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onUserDash = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="reservepage">
        <div className="mainframe2" />
          <div className="main-header4">
              <div className="homepagebtn1">
                <img
                  className="search-icon1"
                  alt=""
                  src="/search-icon1.svg"
                  onClick={onSearchIconClick}
                />
              </div>
              <div className="userdashbtn1">
                <img
                  className="bxbxs-user-circle-icon2"
                  alt=""
                  src="/bxbxsusercircle.svg"
                  onClick={onUserDash}
                />
              </div>
              <div className="titlelogo5">
                <img className="reservify-icon5" alt="" src="/reservify1.svg" />
                <img
                  className="restaurant-1-icon5"
                  alt=""
                  src="/restaurant-1@2x.png"
                />
              </div>
            </div>

            <div className="footer1">
              <img className="copyrights-icon" alt="" src="/copyrights.svg" />
              <div className="footer-info">
                <img className="contact-info-icon" alt="" src="/contactinfo.svg" />
                <div className="faqs">FAQs</div>
                <a href="https://www.google.com"> <div className="about-us" >About Us</div> </a>
                <b className="reservify">RESERVIFY</b>
              </div>
            </div>

            <div className="restaurant-info">
              <div className="section-header">
                <div className="frame-wrapper">
                  <div className="frame15">
                    <div className="about1">About</div>
                    <div className="info1">Info</div>
                    <div className="frame-item" />
                    <div className="map2">Map</div>
                    <div className="frame-inner" />
                    <div className="rating1">Rating</div>
                    <div className="ellipse-div" />
                    <div className="frame-child1" />
                  </div>
                </div>
              </div>
              <div className="map-image-parent">
                <div className="mapview">
                  {restaurantLongitude && restaurantLatitude && (
                    <MapContainer
                      center={[restaurantLatitude, restaurantLongitude]}
                      zoom={15}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                    <Marker position={[restaurantLatitude, restaurantLongitude]} icon={customIcon}>
                      <Popup>{restaurantLocation}</Popup>
                    </Marker>
                    </MapContainer>
                  )}
                </div>
                <div className="about-paragraph">{restaurantAbout}</div>
                <b className="about">ABOUT</b>
                <b className="info">INFO</b>
                <b className="map">
                  <p className="map1">MAP</p>
                </b>
                <b className="rating">RATING</b>
              </div>
              <div className="selectionofpeople">
                <div className="div">5</div>
                <div className="div1">4</div>
                <div className="div2">3</div>
                <div className="div3">2</div>
              </div>
              <div className="reserve-bar">
                <div className="background" />
                <div className="reserve-now-btn" onClick={onReserveNowBtnClick}>
                  <div className="reserve-now-btn-child" />
                  <b className="reserve-now">Reserve Now</b>
                </div>
                <div className="time">
                  <TimePicker
                    label="Time: "
                    value={timeDateTimePickerValue}
                    onChange={(newValue) => {
                      setTimeDateTimePickerValue(newValue);
                    }}
                    slotProps={{textField: {variant: "standard",size: "medium",color: "primary",},
                    }}
                  />
                </div>
                <div className="date">
                  <DatePicker
                    label="Date:"
                    value={dateDateTimePickerValue}
                    onChange={(newValue) => {
                      setDateDateTimePickerValue(newValue);
                    }}
                    slotProps={{textField: {variant: "standard",size: "medium",color: "primary",},
                    }}
                  />
                </div>
                <FormControl
                  className="numberpeople"
                  sx={{ width: 191 }}
                  variant="standard">
                  <InputLabel color="primary">{`Number of People: `}</InputLabel>
                  <Select 
                  color="primary" 
                  label="Number of People: "
                  value = {numpeople}
                  onChange = {handleNumPeopleChange}
                  >
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="reserve-bar-child" />
                <div className="pick-the-restaurants">
                  Pick the restaurant's reservation information
                </div>
                {errorMessages.map((errorMessage, index) => <div key={index} className="error1">{errorMessage}</div>)}
              </div>
              <div className="info-box">
                <div className="info-box-child" />
                <img className="steak-image-icon" alt="" src="/steak-image@2x.png" />
                <div className="cuisine-italian">Cuisine: {restaurantCuisine}</div>
                <div className="average-cost-50">Average Cost: {restaurantAveCost}$ pp</div>
              </div>
              <RatingForm aveRating={restaurantAveRating}/>
              <div className="top-titles">
                <b className="resturaunt-name1">{restaurant_name}</b>
                <div className="location">{restaurantLocation}</div>
              </div>
              <div className="rest-images">
                <img
                  className="rest-images-child"
                  alt=""
                  src={restaurantImageNum}
                />
                <div className="frame-parent">
                  <div className="frame16" />
                <b className="resturaunt-name2">{restaurant_name}</b>
                </div>
              </div>
            </div>
      </div>
    </LocalizationProvider>
  );
};

export default ReservePage;
