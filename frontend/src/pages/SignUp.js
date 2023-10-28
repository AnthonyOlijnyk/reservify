import RegisterForm from "../components/RegisterForm";
import "./SignUp.css";

const Signup = () => {

  return (
    <div className="signup">
      <img className="signup-child" alt="" src="/rectangle-9.svg" />
      <RegisterForm />
      <div className="main-header1">
        <div className="titlelogo1">
          <img className="reservify-icon1" alt="" src="/reservify1.svg" />
          <img
            className="restaurant-1-icon1"
            alt=""
            src="/restaurant-1@2x.png"
          />
        </div>
      </div>
      <img className="restaurant-2-icon1" alt="" src="/restaurant-2@2x.png" />
      <div className="titlelogo2">
        <img className="reservify-icon1" alt="" src="/reservify1.svg" />
        <img className="restaurant-1-icon1" alt="" src="/restaurant-1@2x.png" />
      </div>
    </div>
  );
};

export default Signup;
