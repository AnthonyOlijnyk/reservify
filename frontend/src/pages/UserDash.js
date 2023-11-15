import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDash.css";

const UserDash = (props) => {
  const navigate = useNavigate();
  const [oldUsername, setOldUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [confirmUsername, setConfirmUsername] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const onSearchIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onLogoutBtnClick = useCallback(() => {
    fetch("http://localhost:8000/api/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => {console.log("logged out")})
      .catch(error => {console.error('Error:', error);});
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onChangeUserButtonClick = useCallback(async () => {
    try {
      if (!oldUsername) {
        setErrorMessage("Please enter your old username.");
        return;
      }
      if (!newUsername){
        setErrorMessage("Please enter your new username.");
        return;
      }
      if (newUsername !== confirmUsername) {
        setErrorMessage("New and confirm usernames must match.");
        return;
      }
      if (oldUsername === newUsername || oldUsername === confirmUsername || oldUsername === newUsername === confirmUsername) {
        setErrorMessage("Old and new usernames must be different.");
        return;
      }
      const jsonData = {
        username: oldUsername,
        new_username: newUsername,
        confirmUsername,
      };

      console.log(jsonData);

      const response = await fetch("http://localhost:8000/api/users/"+ oldUsername +"/update/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.username) {
          setOldUsername(oldUsername);
          setNewUsername(newUsername);
          setConfirmUsername(confirmUsername);
          setErrorMessage(`Username Successfully Saved`); 
        } else {
          setErrorMessage(`Error: ${data.error}`);
          console.log('User change error:', data);
        }
      } else {
        setErrorMessage(`Username does not exist`);
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [oldUsername, newUsername, confirmUsername, setOldUsername, setNewUsername, setConfirmUsername, setErrorMessage]);

  const onChangePassButtonClick = useCallback(async () => {
    try {
      //Could remove the following if statement if needed
      if (!oldUsername) {
        setErrorMessage("Please enter your old username.");
        return;
      }
      if (!oldPassword){
        setErrorMessage("Please enter your old password.");
        return;
      }
      
      if (newPassword !== confirmPassword) {
        setErrorMessage("New and confirm passwords must match.");
        return;
      }

      if (oldPassword === newPassword || oldPassword === confirmPassword || oldPassword === newPassword === confirmPassword) {
        setErrorMessage("Old and new passwords must be different.");
        return;
      }

      const jsonData = {
        oldPassword,
        new_password: newPassword,
        confirmPassword,
      };
  
      console.log(jsonData);
  
      const response = await fetch("http://localhost:8000/api/users/"+ oldUsername +"/update/password/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        if (newPassword === confirmPassword) {
          setOldPassword(oldPassword);
          setNewPassword(newPassword);
          setConfirmPassword(confirmPassword);
          setErrorMessage(`Password Successfully Saved`); 
        } else {
          const errorData = await response.json();
          setErrorMessage(`Error: ${errorData.error}`);
          console.log('Login error:', errorData);
        }
      } else {
        setErrorMessage(`Old password or old username is incorrect`);
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [oldUsername, oldPassword, newPassword, confirmPassword, setOldPassword, setNewPassword, setConfirmPassword, setErrorMessage]);
  
  return (
    <div className="user-dash">
      <div className="mainframe" id="user-dash">
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
            <img className="reservify-icon" alt="" src="/reservify.svg" onClick={onSearchIconClick} />
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
              <div className="changeuserbtn">
                <button className="changeusernamebtn" onClick={onChangeUserButtonClick}>
                  <div className="change-user">Change Username</div>
                </button>
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
              <div className="changepassbtn">
                <button className="changepasswordbtn" onClick={onChangePassButtonClick}>
                  <div className="change-password">Change Password</div>
                </button>
              </div>
              <div className="error">{errorMessage}</div>
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
            <a href="https://www.google.com"> <div className="about-us" >About Us</div> </a>
            <b className="reservify">RESERVIFY</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
