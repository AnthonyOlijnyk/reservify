import { useMemo } from "react";
import "./RestTemplate.css";

const RestTemplate = ({
  restaurantName,
  dimensionCode,
  imageDimensionCode,
  culturalOrigin,
  address,
  propLeft,
  propHeight,
  propBottom,
  propWidth,
}) => {
  const latestProperty3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const fiveStarsIconStyle = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
    };
  }, [propHeight, propBottom]);

  const japaneseStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="latest-property-3" style={latestProperty3Style}>
      <img className="latest-property-3-child" alt="" src="/rectangle-72.svg" />
      <b className="fomofuku">{restaurantName}</b>
      <img
        className="five-stars-icon2"
        alt=""
        src={dimensionCode}
        style={fiveStarsIconStyle}
      />
      <img className="latest-property-3-item" alt="" src={imageDimensionCode} />
      <div className="japanese3" style={japaneseStyle}>
        {culturalOrigin}
      </div>
      <img
        className="latest-property-3-inner"
        alt=""
        src="/rectangle-8-stroke.svg"
      />
      <img className="latest-property-3-inner" alt="" src="/rectangle-8.svg" />
      <img className="reserve-icon4" alt="" src="/reserve.svg" />
      <img className="heart-icon4" alt="" src="/heart.svg" />
      <div className="main-street-toronto">{address}</div>
    </div>
  );
};

export default RestTemplate;
