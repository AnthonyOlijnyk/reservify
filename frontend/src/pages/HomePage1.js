import EmailFormContainer from "../components/EmailFormContainer";
import FormFilterCard from "../components/FormFilterCard";
import "./HomePage1.css";

const HomePage1 = () => {
  return (
    <div className="homepage1">
      <img className="footer-icon1" alt="" src="/footer.svg" />
      <EmailFormContainer />
      <img className="top-rated-icon1" alt="" src="/top-rated.svg" />
      <img className="takeout-icon1" alt="" src="/takeout.svg" />
      <img className="recommended-icon1" alt="" src="/recommended.svg" />
      <FormFilterCard />
    </div>
  );
};

export default HomePage1;
