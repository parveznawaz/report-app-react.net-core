import React from "react";
import "./ReportTitle.css";

export default function ReportTitle({ title }) {
  return (
    <div className="card title">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
