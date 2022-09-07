import React from "react";
import recommendCars from "../assets/dummy-data/recommendCars";
import CarStatsChart from "../charts/CarStatsChart";
import MileCharts from "../charts/MileCharts";
import SingleCard from "../components/reuseable/SingleCard";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import "../styles/dashboard.scss";

const cardObj = [
  {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
  },
  {
    title: "Daily Trips",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
  },
  {
    title: "Clients Annually",
    totalNumber: "85K",
    icon: "ri-user-line",
  },
  {
    title: "Kilometers Daily",
    totalNumber: 21,
    icon: "ri-timer-flash-line",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="wrapper">
        <div className="cards">
          {cardObj.map((card) => (
            <SingleCard item={card} />
          ))}
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="title">Miles Statistics</h3>
            <MileCharts />
          </div>

          <div className="stats">
            <h3 className="title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend_cars">
          {recommendCars.map((item) => (
            <RecommendCarCard item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
