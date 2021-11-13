import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";

function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <div className="chart__container">
        <h3 className="chart__title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#1976d2" />
            <Line type="monotone" dataKey={dataKey} stroke="#1976d2" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#EEEEEE" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
