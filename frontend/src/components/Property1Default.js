import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  mealType,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  labelTextAlign,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const labelStyle = useMemo(() => {
    return {
      textAlign: labelTextAlign,
    };
  }, [labelTextAlign]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="label" style={labelStyle}>
        {mealType}
      </div>
    </div>
  );
};

export default Property1Default;
