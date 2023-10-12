import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    const username = document.querySelector(".enter-username").value;
    const phone_number = document.querySelector(".enter-phonenumber").value;
    const name = document.querySelector(".enter-full-name").value;
    const password = document.querySelector(".enter-password").value;
    const email = document.querySelector(".enter-e-mail").value;

    const jsonData = {username, phone_number, name, email, password};

    console.log(jsonData)

      fetch("http://localhost:8000/api/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {console.log(data); })
      .catch(error => {console.error('Error:', error);});
    });

  const onRESERVIFYTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="signup">
      <img className="signup-child" alt="" src="/rectangle-9.svg" />
      <div className="register-form">
        <div className="email">Email:</div>
        <div className="register-form-child" />
        <div className="full-name">Full Name:</div>
        <div className="register-form-item" />
        <div className="username">Username:</div>
        <div className="register-form-inner" />
        <div className="phonenumber">Enter Phone Number:</div>
        <div className="rectangle-div" />
        <div className="password">Password:</div>

        <div className="register-form-child1" />
        <div
          className="have-an-account-container"
          onClick={onHaveAnAccountClick}
        >
          <span className="have-an-account-container1">
            <span>{`Have an account? `}</span>
            <b className="sign-in-now">Sign-In Now!</b>
          </span>
        </div>
        <b className="please-fill-out">Please fill out form to Register!</b>
        <div className="register-button" >
          <div className="rectangle-parent">
            <div className="group-child" onClick={onRectangle6Click}/>
            <div className="register">Register</div>
          </div>
        </div>
        <input
          className="enter-username"
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="enter-password"
          placeholder="Enter Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="enter-phonenumber"
          placeholder="Enter Phone Number"
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="enter-full-name"
          placeholder="Enter Username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="enter-e-mail"
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="main-header1">
        <div className="header">
          <div className="reservify" onClick={onRESERVIFYTextClick}>
            RESERVIFY
          </div>
          <div className="akar-iconsglobe" />
        </div>
        <div className="titlelogo">
          <img className="reservify-icon1" alt="" src="/reservify1.svg" />
          <img
            className="restaurant-1-icon1"
            alt=""
            src="/restaurant-11@2x.png"
          />
        </div>
      </div>
      <img className="restaurant-2-icon-signup" alt="" src="/restaurant-2@2x.png" />
    </div>
  );
};

export default Signup;




















