import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";

const Signup = (props) => {
  const navigate = useNavigate();
  const [enterEmail, setEnterEmail] = useState('');
  const [enterFullName, setEnterFullName] = useState('');
  const [enterUsername, setEnterUsername] = useState('');
  const [enterPhoneNumber, setEnterPhoneNumber] = useState('');
  const [enterNewPassword, setEnterNewPassword] = useState('');
  const [enterConfirmPassword, setEnterConfirmPassword] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isUsernameUnique = async (username) => {
    // Implement the logic to check if the username is unique by making an API request to your backend.
    try {
      const response = await fetch(`http://localhost:8000/api/check-username?username=${username}`);
      if (response.ok) {
        const data = await response.json();
        return data.isUnique;
      }
      throw new Error('Failed to check username uniqueness');
    } catch (error) {
      console.error('Username uniqueness check error:', error);
      return false;
    }
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const doPasswordsMatch = () => {
    return enterNewPassword === enterConfirmPassword;
  };

  const onSignUpButtonClick = async () => {
    if (!isEmailValid(enterEmail)) {
      setErrorPasswordMessage('Invalid email address.');
      return;
    }

    const isUnique = await isUsernameUnique(enterUsername);
    if (!isUnique) {
      setErrorPasswordMessage('Username is already taken.');
      return;
    }

    if (!isPhoneNumberValid(enterPhoneNumber)) {
      setErrorPasswordMessage('Invalid phone number.');
      return;
    }

    if (!doPasswordsMatch()) {
      setErrorPasswordMessage('Passwords do not match.');
      return;
    }

    // Continue with the registration logic here
    const jsonData = {
      email: enterEmail,
      fullName: enterFullName,
      username: enterUsername,
      phoneNumber: enterPhoneNumber,
      password: enterNewPassword,
      confirmPassword: enterConfirmPassword,
    };

    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        const data = await response.json(); // Extract response data as JSON
        if (data.success) {
          setEnterEmail(enterEmail);
          setEnterFullName(enterFullName);
          setEnterUsername(enterUsername);
          setEnterPhoneNumber(enterPhoneNumber);
          setEnterNewPassword(enterNewPassword);
          setEnterConfirmPassword(enterConfirmPassword);
          navigate("/"); 
        }else {
          setErrorPasswordMessage(`Error: ${data.error}`);
          console.error('Signup error:', data);
        }
      } else {
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup">
      <img
        className="backgroundgradiant-icon"
        alt=""
        src="/backgroundgradiant.svg"
      />
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
      <div className="restaurant-2-parent">
        <img className="restaurant-2-icon" alt="" src="/restaurant-2@2x.png" />
        <div className="please-fill-out-form-to-regist-parent">
          <b className="please-fill-out">Please fill out form to Register!</b>
          <div className="registerformfields-parent">
            <div className="registerformfields">
              <div className="emailfield">
                <div className="enterpasswordfield" />
                <div className="confirm-password">Email:</div>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Username"
                  type="text"
                  value={enterEmail}
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
              <div className="fullnamefield">
                <div className="enterpasswordfield" />
                <div className="confirm-password">Full Name:</div>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Username"
                  type="text"
                  value={enterFullName}
                 onChange={(e) => setEnterFullName(e.target.value)}
                />
              </div>
              <div className="enterusernamefield">
                <div className="enterpasswordfield" />
                <div className="confirm-password">Username:</div>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Username"
                  type="text"
                  value={enterUsername}
                  onChange={(e) => setEnterUsername(e.target.value)}
                />

              </div>
              <div className="enterphonefield">
                <div className="enterpasswordfield" />
                <label className="confirm-password">Phone Number:</label>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Phone Number"
                  value={enterPhoneNumber}
                  onChange={(e) => setEnterPhoneNumber(e.target.value)}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <div className="enterpassworldfield">
                <div className="enterpasswordfield" />
                <div className="confirm-password">Password:</div>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Username"
                  type="text"
                  value={enterNewPassword}
                  onChange={(e) => setEnterNewPassword(e.target.value)}
                />

              </div>
              <div className="completenewconfirmpasswordfield">
                <div className="enterconfpasswordfield" />
                <div className="confirm-password">Confirm Password:</div>
                <input
                  className="confirmpasswordtxt"
                  placeholder="Enter Username"
                  type="text"
                  value={enterConfirmPassword}
                  onChange={(e) => setEnterConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="registerbtn">
              <div
                className="registerbtncircle"
                onClick={onSignUpButtonClick}
              />
              <div className="registerbtntxt">Register</div>
            </div>
          </div>
          <div
            className="have-an-account-container"
            onClick={onHaveAnAccountClick}
          >
            <span className="have-an-account-container1">
              <span>{`Have an account? `}</span>
              <b className="sign-in-now">Sign-In Now!</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

