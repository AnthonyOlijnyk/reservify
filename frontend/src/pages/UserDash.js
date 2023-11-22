/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
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
  const [userReservations, setUserReservations] = useState([]);

  const cookies = new Cookies();

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
 
  const fetchUserReservations = useCallback(() => {
    fetch("http://localhost:8000/ReservationApp/api/fetch-reservations", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('jwt')}`
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserReservations(data);
      })
      .catch((error) => {
        console.error('Error fetching user reservations:', error);
      });
  }, [cookies, setUserReservations]);  

  useEffect(() => {
    fetchUserReservations();
    const intervalId = setInterval(() => {
      fetchUserReservations();
    }, 300000); //Setting time out, can be changed if needed
    return () => clearInterval(intervalId);
  }, []);
  
  const currentDate = new Date();

  // Separate reservations into upcoming and past
  const upcomingReservations = userReservations.filter(reservation => new Date(reservation.start_time) > currentDate && reservation.reservation_state !== 'Canceled');
  const sortedUpcomingReservations = upcomingReservations.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

  const pastReservations = userReservations.filter(reservation => new Date(reservation.start_time) <= currentDate);
  const sortedPastReservations = pastReservations.sort((a, b) => new Date(b.start_time) - new Date(a.start_time));

  const cancelledReservations = userReservations.filter(reservation => reservation.reservation_state === 'Canceled' );
  const sortedCancelReservations = cancelledReservations.sort((a, b) => new Date(b.start_time) - new Date(a.start_time));

  const onCancelReservationClick = (reservationId) => {
    const jsonData = {
      reservation_id: reservationId,
      new_state: 'Canceled',
    };
    fetch(`http://localhost:8000/ReservationApp/api/reservations/update_state/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('jwt')}`
      },
        body: JSON.stringify(jsonData),
    })
    .then((response) => {
      if (response.ok) {
        fetchUserReservations();
      } else {
        console.error('Error canceling reservation:', response.statusText);
      }
    })
    .catch((error) => console.error('Error canceling reservation:', error));
  };

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
        old_username: oldUsername,
        new_username: newUsername,
      };

      console.log(jsonData);

      const response = await fetch("http://localhost:8000/api/users/update/username/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get('jwt')}`
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        if (newUsername === confirmUsername) {
          setOldUsername(oldUsername);
          setNewUsername(newUsername);
          setErrorMessage(`Username Successfully Saved`); 
        } else {
          const errorData = await response.json();
          setErrorMessage(`Error: ${errorData.error}`);
          console.log('Login error:', errorData);
        } 
      } else {
        setErrorMessage(`Please enter your correct old username`);
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [oldUsername, newUsername, confirmUsername, cookies, setOldUsername, setNewUsername, setConfirmUsername, setErrorMessage]);

  const onChangePassButtonClick = useCallback(async () => {
    try {
      if (!oldPassword){
        setErrorMessage("Please enter your old password.");
        return;
      }
      if (!newPassword){
        setErrorMessage("Please enter your new password.");
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
        old_password: oldPassword,
        new_password: newPassword,
      };
  
      console.log(jsonData);
  
      const response = await fetch("http://localhost:8000/api/users/update/password/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.get('jwt')}`
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        if (newPassword === confirmPassword) {
          setOldPassword(oldPassword);
          setNewPassword(newPassword);
          setErrorMessage(`Password Successfully Saved`); 
        } else {
          const errorData = await response.json();
          setErrorMessage(`Error: ${errorData.error}`);
          console.log('Login error:', errorData);
        }
      } else {
        setErrorMessage(`Please enter your correct old password`);
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [oldPassword, newPassword, confirmPassword, cookies, setOldPassword, setNewPassword, setConfirmPassword, setErrorMessage]);
  
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
              <b className="upcoming">Upcoming</b>
              <div className="reservations1">Reservations</div>
              <div className="up-container">
              {sortedUpcomingReservations.map((reservation, index) => (
                <div className="restaurant2" key={index}>
                  <div className="cancelres2">
                    <div className="cancelresbtn" />
                    <button className="cancel-reservation" onClick={() => onCancelReservationClick(reservation.id)}>Cancel Reservation</button>
                  </div>
                  <div key={reservation.id} className="restaurant21">
                    <b className="restaurant-2">{reservation.restaurant.name}</b>
                    <div className="date_data-10282023">
                      <span className="date_data">{`Date and time: `}</span>
                      <span className="span">{new Date(reservation.start_time).toLocaleString('en-US', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
                    </div>
                    <div className="number-of-people-container">
                      <span className="date_data">{`Number of People: `}</span>
                      <span className="span">{reservation.number_of_people}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
            <div className="reservation2">
              <div className="divider1" />
              <div className="upcomingline2" />
              <b className="past">Past</b>
              <div className="past-container">
              {sortedPastReservations.map((reservation, index) => (
                <div className="restaurant2" key={index}>
                  <div key={reservation.id} className="restaurant21">
                    <b className="restaurant-2">{reservation.restaurant.name}</b>
                    <div className="date_data-10282023">
                      <span className="date_data">{`Date and time: `}</span>
                      <span className="span">{new Date(reservation.start_time).toLocaleString('en-US', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
                    </div>
                    <div className="number-of-people-container">
                      <span className="date_data">{`Number of People: `}</span>
                      <span className="span">{reservation.number_of_people}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
            </div>
          <div className="reservation3">
              <div className="divider3" />
              <div className="upcomingline3" />
              <b className="cancelled">Cancelled</b>
              <div className="cancel-container">
              {sortedCancelReservations.map((reservation, index) => (
                <div className="restaurant2" key={index}>
                  <div key={reservation.id} className="restaurant21">
                    <b className="restaurant-2">{reservation.restaurant.name}</b>
                    <div className="date_data-10282023">
                      <span className="date_data">{`Date and time: `}</span>
                      <span className="span">{new Date(reservation.start_time).toLocaleString('en-US', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</span>
                    </div>
                    <div className="number-of-people-container">
                      <span className="date_data">{`Number of People: `}</span>
                      <span className="span">{reservation.number_of_people}</span>
                    </div>
                  </div>
                </div>
              ))}
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
