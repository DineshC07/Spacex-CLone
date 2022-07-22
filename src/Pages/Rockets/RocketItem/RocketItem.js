import React from "react";
import "./RocketItem.css";
import { useLocation } from "react-router-dom";

const RocketItem = (props) => {
  const data = useLocation();

  return (
    <div className="total">
      <div className="rocket-wrap">
        <div className="rocketitem-card">
          <img src={data?.state?.item?.flickr_images[1]} alt="rocket" />
        </div>
        <div className="rocket-description">
          <h3>{`Name : ${data?.state?.item?.name}`}</h3>
          <h4>{`Weight : ${data?.state?.item?.mass?.kg}`}</h4>
          <h4>{`Height : ${data?.state?.item?.height?.meters}`}</h4>
          <h4>{`Country : ${data?.state?.item?.country}`}</h4>
          <p>{`Description : ${data?.state?.item?.description}`}</p>{" "}
          <div className="button-div">
            <button className="wiki-link">
              <a href={data?.state?.item?.wikipedia} target="_blank">
                Wikipedia
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketItem;
