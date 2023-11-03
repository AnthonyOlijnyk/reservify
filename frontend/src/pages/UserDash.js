import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDash.css";
import { useUser } from "./UserContext";

const UserDash = (props)=> {
  const navigate = useNavigate();
  const {oldUsername, setOldUsername} = useUser('');
  const [newUsername, setNewUsername] = useState('');
  const [confirmUsername, setConfirmUsername] = useState('');

  const [errorUsernameMessage, setErrorUsernameMessage] = useState('');

  const {oldPassword, setOldPassword} = useUser('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onLogoutBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onChangeUserButtonClick = useCallback(async () => {
    try {
      const oldUsername = document.querySelector(".enter-o-username").value;
      const newUsername = document.querySelector(".enter-n-username").value;
      const confirmUsername = document.querySelector(".enter-c-username").value;

      const jsonData = {
        oldUsername,
        newUsername,
        confirmUsername,
      };

      console.log(jsonData);

      const response = await fetch("http://localhost:8000/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setOldUsername(oldUsername);
          setNewUsername(newUsername);
          setConfirmUsername(confirmUsername);
        } else {
          const errorData = await response.json();
          setErrorUsernameMessage(`Error: ${errorData.error}`);
          console.log('User change error:', errorData);
        }
      } else {
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [setOldUsername, setNewUsername, setConfirmUsername, setErrorUsernameMessage]);

  const onChangePassButtonClick = useCallback(async () => {
    try {
      const oldPassword = document.querySelector(".enter-o-password").value;
      const newPassword = document.querySelector(".enter-n-password").value;
      const confirmPassword = document.querySelector(".enter-c-password").value;
  
      const jsonData = {
        oldPassword,
        newPassword,
        confirmPassword,
      };
  
      console.log(jsonData);
  
      const response = await fetch("http://localhost:8000/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      if (response.ok) {
        if (setNewPassword === setConfirmPassword) {
          setOldPassword(oldPassword);
          setNewPassword(newPassword);
          setConfirmPassword(confirmPassword);
        } else {
          const errorData = await response.json();
          setErrorPasswordMessage(`Error: ${errorData.error}`);
          console.log('Login error:', errorData);
        }
      } else {
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [setOldPassword, setNewPassword, setConfirmPassword, setErrorPasswordMessage]);

  return (
    <div className="user-dash">
      <div className="mainframe" id ="user-dash">
        <div className="mainheader">
          <div className="homepagebtn">
            <img
              className="search-icon"
              alt=""
              src="/search-icon.svg"
              onClick={onSearchIconClick}
            />
          </div>
          <div className="titlelogo">
            <img className="reservify-icon" alt="" src="/reservify.svg" onClick={onSearchIconClick}/>
            <img
              className="restaurant-1-icon"
              alt=""
              src="/restaurant-1@2x.png"
            />
          </div>
        </div>
        <div className="settingsreservations">
          <div className="settings">
            <div className="inputfields">
              <img
                className="profileimage-icon"
                alt=""
                src="bxbxsusercircle1.svg"
              />
              <div className="changepassbtn">
                <button className="changepasswordbtn" onClick={onChangePassButtonClick}>
                  <div className="change-password">Change Password</div>
                  <div className="error">{errorUsernameMessage}</div>
                </button>
              </div>
                <div className="confirmpasswordfield">
                  <div className="confirmpasswordfield1" />
                  <input
                    className="confirm-new-password"
                    placeholder="Confirm New Password"
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                <div className="enter-confirm-password">
                  Enter Confirm Password:
                </div>
              </div>
              <div className="newpasswordfield">
                <div className="enternewpasswordfield" />
                <input
                  className="enter-new-password"
                  placeholder="Enter New Password"
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="enter-confirm-password">
                  Enter New Password:
                </div>
              </div>
              <div className="oldpasswordfield">
                <div className="enteroldpasswordfield" />
                <input
                  className="enter-old-password"
                  placeholder="Enter Old Password"
                  type="text"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <div className="enter-confirm-password">
                  Enter Old Password:
                </div>
              </div>
              <div className="changeuserbtn">
                <button className="changeuserbtn" onClick={onChangeUserButtonClick}>
                  <div className="change-user">Change Username</div>
                </button>
                <div className="error">{errorPasswordMessage}</div>
              </div>
              <div className="confirmusernamefield">
                <div className="confirmpasswordfield1" />
                <input
                  className="confirm-new-username"
                  placeholder="Confirm New Username"
                  type="text"
                  value={confirmUsername}
                  onChange={(e) => setConfirmUsername(e.target.value)}
                />
                <div className="enter-confirm-password">
                  Enter Confirm Username:
                </div>
              </div>
              <div className="newusernamefield">
                <div className="enternewpasswordfield" />
                <input
                  className="enter-new-username"
                  placeholder="Enter New Username"
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
                <div className="enter-confirm-password">
                  Enter New Username:
                </div>
              </div>
              <div className="oldusernamefield">
                <div className="enteroldpasswordfield" />
                <input
                  className="enter-old-username"
                  placeholder="Enter Old Username"
                  type="text"
                  value={oldUsername}
                  onChange={(e) => setOldUsername(e.target.value)}
                />
                <div className="enter-confirm-password">
                  Enter Old Username:
                </div>
              </div>
              <img className="divider1-icon" alt="" src="/divider1.svg" />
            </div>
            <div className="settings1">Settings</div>
          </div>
          <div className="reservations">
            <div className="reservation">
              <div className="divider2" />
              <div className="upcomingline" />
              <b className="past">Past</b>
              <b className="upcoming">Upcoming</b>
              <div className="reservations1">Reservations</div>
            </div>
            <div className="restaurant2">
              <div className="cancelres2">
                <div className="changepasswordbtn" />
                <div className="cancel-reservation">Cancel Reservation</div>
              </div>
              <div className="restaurant21">
                <b className="restaurant-2">Restaurant 2</b>
                <div className="date-10282023">
                  <span className="date">{`Date: `}</span>
                  <span className="span">10/28/2023</span>
                </div>
                <div className="time-300-pm-container">
                  <span className="date">{`Time: `}</span>
                  <span className="span">3:00 PM</span>
                </div>
                <div className="number-of-people-container">
                  <span className="date">Number of People</span>
                  <span className="span">: 2</span>
                </div>
                <div className="imgrest2" />
              </div>
            </div>
            <div className="restaurant1">
              <div className="cancelres1">
                <div className="changepasswordbtn" onClick={onRectangleClick} />
                <div className="cancel-reservation1">Cancel Reservation</div>
              </div>
              <div className="restaurant11">
                <b className="restaurant-2">Restaurant 1</b>
                <div className="date-10202023">
                  <span className="date">{`Date: `}</span>
                  <span className="span2">10/20/2023</span>
                </div>
                <div className="time-300-pm-container">
                  <span className="date">{`Time: `}</span>
                  <span className="span">1:00 PM</span>
                </div>
                <div className="number-of-people-container1">
                  <span className="date">Number of People</span>
                  <span className="span">{`: 4 `}</span>
                </div>
                <div className="imgrest2" />
              </div>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogoutBtnClick}>
            <div className="logout-btn-child" onClick={onRectangleClick} />
            <b className="logout">LOGOUT</b>
          </button>
        </div>
        <div className="footer">
        <img className="copyrights-icon" alt="" src="/copyrights.svg" />
          <div className="footer-info">
            <img className="contact-info-icon" alt="" src="/contactinfo.svg" />
            <div className="faqs">FAQs</div>
            <div className="about-us">About Us</div>
            <b className="reservify">RESERVIFY</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;