import "./EmailFormContainer.css";

const EmailFormContainer = () => {
  return (
    <div className="frame">
      <img className="frame-child" alt="" src="/frame-6.svg" />
      <div className="newsletter-group">
        <img className="letter-titles-icon" alt="" src="/letter-titles.svg" />
        <div className="letter-input">
          <img className="letter-input-child" alt="" src="/rectangle-49.svg" />
          <img
            className="letter-input-child"
            alt=""
            src="/rectangle-49-stroke.svg"
          />
          <div className="your-email">Your Email...</div>
        </div>
        <img className="send-btn-icon" alt="" src="/send-btn.svg" />
      </div>
    </div>
  );
};

export default EmailFormContainer;
