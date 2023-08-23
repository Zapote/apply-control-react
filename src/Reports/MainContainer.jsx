import React from "react";
import FlexColumn from "./FlexColumn"; // Import the FlexColumn component
import Sidebar from "./Sidebar"; // Import the Sidebar component

const MainContainer = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="flex-fill"><FlexColumn />
        </div>
        <div className="flex-fill"><Sidebar /></div>
      </div>
    </div>
  );
};

export default MainContainer;
