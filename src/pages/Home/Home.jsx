import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <div className="home__list-container">
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}

export default Home;
