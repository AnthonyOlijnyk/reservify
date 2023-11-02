import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useUser } from './UserContext';

const Login = (props)=> {
  const navigate = useNavigate();
  const {email, setEmail} = useUser('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  
  const onLoginButtonClick = useCallback(() => {
    const email = document.querySelector(".enter-email").value;
    const password = document.querySelector(".enter-password").value;
    
    const formData = new FormData(this);
    const jsonData = {email, password};
    formData.forEach((value, key) => {jsonData[key] = value;});

    const crsfToken = formData.get('csrfmiddlewaretoken');

    console.log(jsonData)

      fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': crsfToken
        },
        body: JSON.stringify(jsonData),
      })

      .then(response => response.json())

      .then(data => {
        if (data.success){
          setEmail(email);
          navigate("/homepage");
        } else {
          setErrorMessage(`Error: ${data.error}`);
          console.log('Login error:', data);
        }})

      .catch(error => {console.error('Error:', error);});
      
  }, [navigate, setEmail,setErrorMessage]);

  return (
    <div className="login">
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
      <div className="login-frame">
        <div className="frameT">
          <div className="error">{errorMessage}
          </div>
        </div>
        <div className="frame">
          <div className="frame1">
            <div className="frame2">
              <div className="frame3">
                <b className="welcome-back">Welcome Back!</b>
              </div>
              <div className="frame4">
                <div className="frame5">
                  <div className="frame6">
                    <div className="welcome-back">Email:</div>
                  </div>
                  <div className="frame7">
                    <input
                      className="enter-email"
                      placeholder="Enter Email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="frame8">
                  <div className="frame7">
                    <input
                      className="enter-password"
                      placeholder="Enter Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="frame10">
                    <div className="welcome-back">Password:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame11">              
              <div className="frame12">
                <div
                  className="dont-have-an-container"
                  onClick={onDontHaveAnClick}
                >
                  <span>{`Don’t have an account? `}</span>
                  <b className="register-now">Register Now!</b>
                </div>
              </div>
              <div className="frame13">
                <button className="login-button" onClick={onLoginButtonClick}>
                  <div className="login1">Login</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="frame14">
          <img className="frame-child" alt="" src="/rectangle-7.svg" />
          <img
            className="restaurant-2-icon"
            alt=""
            src="/restaurant-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
