import Property1Default from "./Property1Default";
import "./FormSection.css";

const FormSection = () => {
  return (
    <div className="stories-section">
      <img className="story-details-icon" alt="" src="/story-details.svg" />
      <img className="image-gallery-icon1" alt="" src="/image-gallery.svg" />
      <Property1Default
        property1DefaultBackgroundColor="#fff"
        property1DefaultPosition="absolute"
        property1DefaultTop="19px"
        property1DefaultLeft="-42px"
        property1DefaultWidth="392px"
        property1DefaultHeight="471px"
        labelTextAlign="center"
      />
      <img
        className="your-reservation-is-confirmed"
        alt=""
        src="/your-reservation-is-confirmed.svg"
      />
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img
        className="you-will-get-a-confirmation-an"
        alt=""
        src="/you-will-get-a-confirmation-and-reminder-to-your-email.svg"
      />
      <img className="five-stars-icon2" alt="" src="/five-stars.svg" />
    </div>
  );
};

export default FormSection;
