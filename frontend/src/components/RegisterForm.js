import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");


  const onHaveAnAccountClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    const username = document.querySelector(".enter-username").value;
    const phone_number = document.querySelector(".enter-phonenumber").value;
    const name = document.querySelector(".enter-full-name").value;
    const password = document.querySelector(".enter-password1").value;
    const email = document.querySelector(".enter-e-mail").value;

    const formData = new FormData(this);
    const jsonData = {username, phone_number, name, email, password};
    formData.forEach((value, key) => {jsonData[key] = value;});

    console.log(jsonData)
    const csrfToken = formData.get('csrfmiddlewaretoken');
    

      fetch("http://localhost:8000/api/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json','X-CSRFToken': csrfToken },
        body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {console.log(data); })
      .catch(error => {console.error('Error:', error);});
    
      navigate("/homepage");
  }, [navigate]);

  return (
    <div className="register-form">
      <div className="email1">Email:</div>
      <div className="register-form-child" />
      <div className="full-name">Full Name:</div>
      <div className="register-form-item" />
      <div className="username">Username:</div>
      <div className="register-form-inner" />
      <div className="phonenumber">Phone number:</div>
      <div className="register-form-child1" />
      <div className="password">Password:</div>
      <div className="register-form-child2" />
      <div className="have-an-account-container" onClick={onHaveAnAccountClick}>
        <span className="have-an-account-container1">
          <span>{`Have an account? `}</span>
          <b className="sign-in-now">Sign-In Now!</b>
        </span>
      </div>
      <b className="please-fill-out">Please fill out form to Register!</b>
      <div className="register-button">
        <div className="rectangle-parent">
          <div className="group-child" onClick={onRectangle6Click} />
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
        className="enter-password1"
        placeholder="Enter Password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="enter-phonenumber"
        placeholder="Enter Phone number"
        type="text"
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        className="enter-full-name"
        placeholder="Enter full name"
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
  );
};

export default RegisterForm;
