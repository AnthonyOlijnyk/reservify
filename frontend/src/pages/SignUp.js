import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Signup = () => {
  const navigate = useNavigate();

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRegisterBtnCircleClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="signup">
      <div className="registerpage">
        <div
          className="have-an-account-container"
          onClick={onHaveAnAccountClick}
        >
          <span className="have-an-account-container1">
            <span>{`Have an account? `}</span>
            <b className="sign-in-now">Sign-In Now!</b>
          </span>
        </div>
        <div className="registerbtn">
          <div
            className="registerbtncircle"
            onClick={onRegisterBtnCircleClick}
          />
          <div className="registerbtntxt">Register</div>
        </div>
        <div className="enteremailfield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Email:</div>
        </div>
        <div className="enterfullnamefield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Full Name:</div>
        </div>
        <div className="enterusernamefield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Username:</div>
        </div>
        <div className="enterphonefield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Phone Number:</div>
        </div>
        <div className="enterpassworldfield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Password:</div>
        </div>
        <div className="confirmpasswordfield">
          <input
            className="enteremailtxt"
            placeholder="Enter Username"
            type="text"
          />
          <div className="enteremailcircle" />
          <div className="email">Confirm Password:</div>
        </div>
        <b className="please-fill-out">Please fill out form to Register!</b>
      </div>
      <img className="signup-child" alt="" src="/rectangle-9.svg" />
      <div className="main-header">
        <div className="titlelogo">
          <img className="reservify-icon" alt="" src="/reservify.svg" />
          <img
            className="restaurant-1-icon"
            alt=""
            src="/restaurant-1@2x.png"
          />
        </div>
      </div>
      <img className="restaurant-2-icon" alt="" src="/restaurant-2@2x.png" />
      <div className="titlelogo1">
        <img className="reservify-icon" alt="" src="/reservify.svg" />
        <img className="restaurant-1-icon" alt="" src="/restaurant-1@2x.png" />
      </div>
    </div>
  );
};

export default Signup;
