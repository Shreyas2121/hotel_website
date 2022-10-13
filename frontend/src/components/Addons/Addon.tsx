import React from "react";
import "./addon.css";

export const Addon = () => {
  return (
    <div>
      <div className="checkbox-container">
        <input className="checkbox-input" id="oranges" type="checkbox" />
        <label className="checkbox">Oranges</label>
      </div>
    </div>
  );
};
