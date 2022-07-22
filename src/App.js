import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import HistoryItem from "./Pages/History/HistoryItem/HistoryItem";
import History from "./Pages/History/History";
import Launches from "./Pages/Launches/Launches";
import Rockets from "./Pages/Rockets/Rockets";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import RocketItem from "./Pages/Rockets/RocketItem/RocketItem";
import LaunchItem from "./Pages/Launches/AllLaunches/LaunchItem/LaunchItem";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:title" element={<HistoryItem />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:name" element={<LaunchItem />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/rockets/:id" element={<RocketItem />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
