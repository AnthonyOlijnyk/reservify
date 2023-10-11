import { useCallback, useState  } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRESERVIFYTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onLoginButtonClick = useCallback(async () => {
    const email = document.querySelector(".enter-email").value;
    const password = document.querySelector(".enter-password1").value;
    const jsonData = {email, password};

    console.log(jsonData)

      fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {console.log(data); })
      .catch(error => {console.error('Error:', error);});
    });


  return (
    <div className="login">
      <div className="main-header">
        <div className="header">
          <div className="reservify" onClick={onRESERVIFYTextClick}>
            RESERVIFY
          </div>
          <div className="akar-iconsglobe" />
          <img
            className="restaurant-1-icon"
            alt=""
            src="/restaurant-1@2x.png"
          />
        </div>
      </div>
      <div className="login-frame">
        <div className="login-frame-child" />
        <div className="login-frame-item" />
        <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
          <span>{`Don’t have an account? `}</span>
          <b className="register-now">Register Now!</b>
        </div>
        <b className="welcome-back">Welcome Back!</b>
        <button className="login-button" onClick={onLoginButtonClick}>
          <div className="login-button-child" />
          <div className="login1">Login</div>
        </button>
        <div className="email1">Email:</div>
        <div className="password1">Password:</div>
        <input
          className="enter-email"
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="enter-password1"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img className="login-frame-inner" alt="" src="/rectangle-7.svg" />
        <img className="restaurant-2-icon-login" alt="" src="/restaurant-2@2x.png" />
      </div>
    </div>
  );
};

export default Login;


