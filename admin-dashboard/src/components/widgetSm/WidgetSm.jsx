import React, { useEffect, useState } from "react";
import WidgetSmItem from "../widgetSmItem/WidgetSmItem";
import axios from "axios";

import "./WidgetSm.scss";

function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODIyMmZlZTZjNmNmMzRjOTY4MDk2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc3ODMxNCwiZXhwIjoxNjM3MjEwMzE0fQ.BczNjByB7VKOLgm0n5ueNAtmjZLQbrMn-m95vIriqDU",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <h3 className="widgetSm__title">New Members</h3>
      <ul className="widgetSm__list">
        {newUsers.map((user) => (
          <WidgetSmItem username={user.username} profilePic={user.profilePic}/>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
