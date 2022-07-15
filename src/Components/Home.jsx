import React from "react";
import MainPage from "../Components/MainPage";
import ImgApp from "./ImgApp";


const Home = () => {
  return (
    <div className="div bg-dark">
      <ImgApp />
      <div className="container text-center w-75 mt-5">
        <h1 style={{ color: 'yellow'}}>¡Search By name!</h1>
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
