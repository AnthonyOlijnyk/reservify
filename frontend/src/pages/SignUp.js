import React, { useState, useCallback, useEffect } from 'react';
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
  const [Success, setSuccess] = useState('');
  const [Errors, setErrors] = useState('');

  console.log('Errors1:', Errors);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isFullNameValid = (fullname) => {
    if (!fullname || fullname.trim() === '') {
      return false;
    }
    return true;
  };

  //const isUsernameUnique = async (username) => {
  //  try {
  //    const response = await fetch(`http://localhost:8000/api/check-username?username=${username}`);
  //    if (response.ok) {
  //      const data = await response.json();
  //      return data.isUnique;
  //    }
  //    throw new Error('Failed to check username uniqueness');
  //  } catch (error) {
  //    console.error('Username uniqueness check error:', error);
  //    return false;
  //  }
  //};
//

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const onSignUpButtonClick = useCallback(async ()  => {
    if (!isEmailValid(enterEmail)) {
      setErrors('Invalid email address.');
      return;
    }

    // const isUnique = await isUsernameUnique(enterUsername);
    // if (!isUnique) {
    //   setErrors('Username is already taken.');
    //   return;
    // }
 
    if (!isPhoneNumberValid(enterPhoneNumber)) {
      setErrors('Invalid phone number.');
      return;
    }

    if (!isFullNameValid(enterFullName)) {
      setErrors('Name is required.');
      return;
    }

    if (enterNewPassword !== enterConfirmPassword) {
      setErrors('Passwords do not match.');
      return;
    }

    const jsonData = {
      email: enterEmail,
      name: enterFullName,
      username: enterUsername,
      phone_number: enterPhoneNumber,
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
          setEnterEmail(enterEmail);
          setEnterFullName(enterFullName);
          setEnterUsername(enterUsername);
          setEnterPhoneNumber(enterPhoneNumber);
          setEnterNewPassword(enterNewPassword);
          setEnterConfirmPassword(enterConfirmPassword);
          setSuccess(`Registration Success, Rerouting to HomePage`); 
          setTimeout(() => {
            window.location.href = '/';
          }, 5000);
      } else {
        const data = await response.json()
        let errorMessage = '';
        console.error('Message:', data.message);
        console.error('Errors:', data.errors);
        if (data.errors.email) {
          errorMessage += `Email: ${data.errors.email.join(', ')} `;
        } if (data.errors.username) {
          errorMessage += `Username: ${data.errors.username.join(', ')} `;
        } if (data.errors.password){
          errorMessage += `Password: ${data.errors.password.join(', ')} `;
        }
        setErrors(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [enterEmail, enterFullName, enterUsername, enterPhoneNumber, enterNewPassword, enterConfirmPassword, navigate, setEnterEmail, setEnterFullName, setEnterUsername, setEnterPhoneNumber, setEnterNewPassword, setEnterConfirmPassword]);

  
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
                  placeholder="Enter Email"
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
                  placeholder="Enter Full Name"
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
                  placeholder="Enter Password"
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
                  placeholder="Enter Confirm Password"
                  type="text"
                  value={enterConfirmPassword}
                  onChange={(e) => setEnterConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="registerbtn">
              <button className="registerbtncircle" onClick={onSignUpButtonClick}>
              <div className="registerbtntxt">Register</div>
              </button>
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
        <div className="success">{Success}</div>
        <div className="error">{Errors}</div>
      </div>
    </div>
  );
};

export default Signup;

