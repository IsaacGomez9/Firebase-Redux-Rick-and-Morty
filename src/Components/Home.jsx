import React from "react";
import MainPage from "../Components/MainPage";

const Home = () => {
  return (
    <div className="div">
      <div className="container text-center w-75">
        <h1 className="text-warning">Rick And Morty Wiki</h1>
        <hr />
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
