import "./RestaurantFilterForm.css";

const RestaurantFilterForm = () => {
  return (
    <div className="top1">
      <img className="top-item" alt="" src="/frame-3.svg" />
      <img className="search-bar-icon1" alt="" src="/search-bar.svg" />
      <div className="search-input1">
        <div className="restaurant-occasion-cuisine1">
          Restaurant, occasion, Cuisine
        </div>
        <div className="add-date1">Add date</div>
        <div className="add-time1">Add Time</div>
        <div className="add-people1">Add People</div>
      </div>
      <img className="search-headers-icon1" alt="" src="/searchheaders1.svg" />
      <div className="for-any-event-locate-your-tab-container">
        <img
          className="for-any-event-locate-your-tab1"
          alt=""
          src="/for-any-event-locate-your-table.svg"
        />
      </div>
      <img className="main-header-icon6" alt="" src="/main-header.svg" />
    </div>
  );
};

export default RestaurantFilterForm;
