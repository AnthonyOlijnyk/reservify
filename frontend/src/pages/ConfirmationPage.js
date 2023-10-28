import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/user-dash");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onBackToHomePageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="confirmationpage">
      <div className="mainframe3" />
      <img className="footer-icon4" alt="" src="/footer2.svg" />
      <div className="frame17">
        <div className="main-header-group" onClick={onFrameContainer6Click}>
          <div className="main-header6">
            <div className="homepagebtn1">
              <img
                className="bxbxs-user-circle-icon4"
                alt=""
                src="/bxbxsusercircle.svg"
              />
              <img
                className="search-icon3"
                alt=""
                src="/search-icon1.svg"
                onClick={onSearchIconClick}
              />
            </div>
            <div className="titlelogo7">
              <img className="reservify-icon7" alt="" src="/reservify1.svg" />
              <img
                className="restaurant-1-icon7"
                alt=""
                src="/restaurant-1@2x.png"
              />
            </div>
          </div>
          <div className="content">
            <div className="confirmation-message">
              <div className="pill">
                <div className="label1" />
              </div>
              <div className="reservation-confirmed-parent">
                <div className="reservation-confirmed">
                  reservation confirmed!
                </div>
                <div className="you-will-get">
                  You will get a confirmation and reminder to your email
                </div>
                <img className="vector-icon3" alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className="property-large">
              <div className="frame18">
                <img
                  className="property-col-icon1"
                  alt=""
                  src="/property-col1@2x.png"
                />
                <div className="property-image11" />
              </div>
              <div className="frame19">
                <div className="frame20">
                  <div className="frame21" />
                </div>
                <div className="frame22">
                  <b className="don-alfonso-19803">Don Alfonso 1980</b>
                </div>
              </div>
            </div>
          </div>
          <img className="line-icon" alt="" src="/line-18.svg" />
          <div className="back-to-homepage-parent">
            <div className="back-to-homepage" onClick={onBackToHomePageClick}>
              <b className="check-reservations">Home</b>
            </div>
            <div className="checkresbtn">
              <b className="check-reservations">Check Reservations</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
