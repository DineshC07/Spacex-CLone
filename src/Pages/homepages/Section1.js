import "./Section1.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAboutInfoAsync } from "../../store/slice/AboutSlice";

const Section1 = () => {
  const aboutInfo = useSelector((state) => state.AboutInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutInfoAsync("/company"));
  }, []);

  return (
    <div className="hero-container">
      <h1>SpaceX</h1>
      <div className="description-container">
        <p>{`Founded : ${aboutInfo?.AboutInfo?.payload?.founded}`}</p>
        <p>{`CEO :${aboutInfo?.AboutInfo?.payload?.ceo}`}</p>
      </div>
    </div>
  );
};

export default Section1;
