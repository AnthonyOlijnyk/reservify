import RestaurantFilterForm from "../components/RestaurantFilterForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home1">
      <img className="footer-icon3" alt="" src="/footer1.svg" />
      <img className="frame-icon1" alt="" src="/frame.svg" />
      <img className="top-rated-icon2" alt="" src="/top-rated1.svg" />
      <img className="takeout-icon2" alt="" src="/takeout1.svg" />
      <img className="recommended-icon2" alt="" src="/recommended1.svg" />
      <RestaurantFilterForm />
    </div>
  );
};

export default Home;
