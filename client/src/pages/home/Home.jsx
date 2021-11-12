import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODIyMmZlZTZjNmNmMzRjOTY4MDk2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjUzMDQyMCwiZXhwIjoxNjM2OTYyNDIwfQ.3mBfJaO8suEpsaOA_4cTDcifH7klClyvH1IVY4XztOU",
            },
          }
        );

        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <div className="home__list-container">
        {lists.map((list) => (
          <List list={list} />
        ))}
      </div>
    </div>
  );
}

export default Home;
