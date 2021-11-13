import React from "react";
import WidgetLgTableRow from "../widgetLgTableRow/WidgetLgTableRow";

import "./WidgetLg.scss";

function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLg__title">Latest Transactions</h3>
      <table className="widgetLg__table">
        <tbody>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <WidgetLgTableRow
            username="Harshit Behl"
            date="16 June 1996"
            amount="196.00"
            status="Approved"
            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          />
          <WidgetLgTableRow
            username="Dana Ivanova"
            date="11 June 1998"
            amount="211.00"
            status="Pending"
            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          />
          <WidgetLgTableRow
            username="Nick Fury"
            date="20 October 1997"
            amount="145.00"
            status="Approved"
            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          />
          <WidgetLgTableRow
            username="Peter Parker"
            date="11 April 1998"
            amount="250.00"
            status="Declined"
            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          />
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
