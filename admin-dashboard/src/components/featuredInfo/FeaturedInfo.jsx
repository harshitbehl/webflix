import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import FeaturedItem from "../featuredItem/FeaturedItem";
import "./FeaturedInfo.scss";

function FeaturedInfo() {
  return (
    <div className="featuredInfo">
      <FeaturedItem
        title={"Revenue"}
        amount={"$2,196"}
        rate={-11.5}
        icon={<ArrowDownward className="featuredItem__arrowDown" />}
      />
      <FeaturedItem
        title={"Sales"}
        amount={"$4,916"}
        rate={-2.5}
        icon={<ArrowDownward className="featuredItem__arrowDown" />}
      />
      <FeaturedItem
        title={"Cost"}
        amount={"$2,999"}
        rate={+3.5}
        icon={<ArrowUpward className="featuredItem__arrowUp" />}
      />
    </div>
  );
}

export default FeaturedInfo;
