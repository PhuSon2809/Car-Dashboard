import React from "react";

const RecommendCarCard = (props) => {
  const { carName, retweet, imgUrl, rentPrice, percentage } = props.item;

  return (
    <div className="car-card">
      <div className="top">
        <h5>
          <span>
            <i className="ri-refresh-line"></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>

      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="bottom">
        <h4>{carName}</h4>
        <div className="other">
          <div className="icon">
            <p>
              <i className="ri-repeat-line"></i>
              {retweet}k
            </p>
            <p>
              <i className="ri-settings-2-fill"></i>
            </p>
            <p>
              <i className="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>${rentPrice}/h</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCarCard;
