import React from "react";
import { useParams } from "react-router-dom";
import "./HistoryItem.css";
import { useLocation } from "react-router-dom";

const HistoryItem = (props) => {
  const data = useLocation();
  return (
    <div className="history-wrapper">
      <div className="container">
        <h2>{`Title : ${data?.state?.item?.title}`}</h2>
        <h3>{`Date : ${data?.state?.item?.event_date_utc}`}</h3>

        <p>{`Title : ${data?.state?.item?.details}`}</p>
        <button>
          <a href={data?.state?.item?.links?.article} target="blank">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
