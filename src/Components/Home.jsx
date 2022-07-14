import React from "react";
import MainPage from "../Components/MainPage";
import ImgApp from "./ImgApp";

const Home = () => {
  return (
    <div className="div">
      <ImgApp />
      <div className="container text-center w-75 mt-5">
        <h1>¡Search By name!</h1>
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
