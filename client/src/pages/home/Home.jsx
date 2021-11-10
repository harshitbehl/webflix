import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";

function Home({ type }) {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
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
