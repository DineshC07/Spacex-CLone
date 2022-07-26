import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import {
  getLaunchAsync,
  getPastLaunchAsync,
  getUpcomingLaunchAsync,
} from "../../store/slice/LaunchSlice";
import "./Launches.css";

const Launches = () => {
  const launchData = useSelector((state) => state?.launch);
  const pastLaunchData = useSelector((state) => state?.pastLaunch);
  const upcomingLaunchData = useSelector((state) => state?.upcomingLaunchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLaunchAsync("/launches"));
    dispatch(getPastLaunchAsync("/launches/past"));
    dispatch(getUpcomingLaunchAsync("/launches/upcoming"));
  }, []);
  const allData = launchData?.LaunchSlice?.launchData.filter(
    (item) => item?.links?.patch?.small
  );
  const upcomingData = launchData?.upcomingLaunchSlice?.upcomingLaunchData;

  const imgurl = "https://i.imgur.com/BrW201S.png";
  return (
    <div className="launches-page">
      <Carousel dataList={allData} />
      <section>
        <div className="cards-wrapper">
          {upcomingData &&
            upcomingData.map((item, i) => {
              return (
                <div key={i} className="card-grid-space">
                  <div className="card-sect">
                    <div>
                      <h1>{item?.name}</h1>
                      <h3>{item?.date_local}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Launches;
