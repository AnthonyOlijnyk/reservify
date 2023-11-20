import { useMemo } from "react";
import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import "./RestTemplate.css";

const RestTemplate = ({
  restaurant,
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

  const navigate = useNavigate();

  const restaurantNameStyle = useMemo(() => {
    return {
      fontSize: '17px',
      fontWeight: 'bold',
      maxWidth: '1000%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '0.8',
      
    };
  }, []);
  
  
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
      whiteSpace: 'nowrap',
      maxWidth: '80%',
    };
  }, [propWidth]);

  const onReserveBtnClick = useCallback((restaurant) => {
    console.log(restaurant);
    navigate(`/reservepage/${restaurantName}`, { state: { restaurant } });
  }, [navigate, restaurantName]);

  return (
    <div className="latest-property-3" style={latestProperty3Style}>
      <img className="latest-property-3-child" alt="" src="/rectangle-72.svg" />
      <b className="fomofuku" style={restaurantNameStyle}>
        {restaurantName}
      </b>
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
      <img className="reserve-icon4" alt="" src="/reserve.svg" onClick={() => onReserveBtnClick(restaurant)}></img>
      <div className="main-street-toronto">{address}</div>
    </div>
  );
};

export default RestTemplate;
