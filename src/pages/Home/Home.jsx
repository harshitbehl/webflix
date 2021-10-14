import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
    </div>
  );
}

export default Home;
