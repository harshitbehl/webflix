import React from "react";
import { Avatar } from "@material-ui/core";

import "./WidgetLgTableRow.scss";

function WidgetLgTableRow({ username, date, amount, status, avatarSrc }) {
  return (
    <tr className="widgetLgTableRow">
      <td className="widgetLgTableRow__avatarCell">
        <Avatar src={avatarSrc} /> <span>{username}</span>
      </td>
      <td className="widgetLgTableRow__date">{date}</td>
      <td className="widgetLgTableRow__amount">${amount}</td>
      <td>
        <button className={`widgetLgTableRow__button ${status.toLowerCase()}`}>
          {status}
        </button>
      </td>
    </tr>
  );
}

export default WidgetLgTableRow;
