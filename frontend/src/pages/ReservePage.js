import { useState, useCallback } from "react";
import {
  TextField,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import {
  LocalizationProvider,
  TimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import RatingForm from "../components/RatingForm";
import "./ReservePage.css";

const ReservePage = () => {
  const [timeDateTimePickerValue, setTimeDateTimePickerValue] = useState(null);
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);
  const navigate = useNavigate();

  const onReserveNowBtnClick = useCallback(() => {
    navigate("/reservation-confirmation");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/searchpage");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="reservepage">
        <div className="mainframe2" />
        <img className="footer-icon2" alt="" src="/footer2.svg" />
        <div className="map-image-parent">
          <img className="map-image-icon" alt="" src="/map-image@2x.png" />
          <div className="about-paragraph">
            Don Alfonso is the first restaurant in North America from Michelin
            Star Chefs Alfonso and Ernesto Iaccarino serving a menu of Amalfi
            coast Flavours in an interior accented by priceless art. tasting
            menus interpret Italian ingredients through molecular gastronomy,
            plated in vessels custom designed for each specific dish.
          </div>
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
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
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
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
          </div>
          <FormControl
            className="numberpeople"
            sx={{ width: 191 }}
            variant="standard"
          >
            <InputLabel color="primary">{`Number of People: `}</InputLabel>
            <Select color="primary" label="Number of People: ">
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
        </div>
        <div className="info-box">
          <div className="info-box-child" />
          <img className="steak-image-icon" alt="" src="/steak-image@2x.png" />
          <div className="cuisine-italian">Cuisine: Italian</div>
          <div className="average-cost-50">Average Cost: 50$ pp</div>
          <div className="price-range">Price range: $$</div>
          <div className="average-cost-50">Average Cost: 50$ pp</div>
        </div>
        <RatingForm />
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
        <div className="top-titles">
          <b className="don-alfonso-19801">DON ALFONSO 1980</b>
          <div className="food-street-toronto3">
            100 Food Street, Toronto, CA
          </div>
        </div>
        <div className="rest-images">
          <img
            className="rest-images-child"
            alt=""
            src="/rectangle-40417@2x.png"
          />
          <div className="frame-parent">
            <div className="frame16" />
            <b className="don-alfonso-19802">Don Alfonso 1980</b>
          </div>
        </div>
        <div className="main-header4">
          <div className="initial-options2">
            <img
              className="bxbxs-user-circle-icon2"
              alt=""
              src="/bxbxsusercircle.svg"
            />
            <img
              className="search-icon1"
              alt=""
              src="/search-icon1.svg"
              onClick={onSearchIconClick}
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
      </div>
    </LocalizationProvider>
  );
};

export default ReservePage;