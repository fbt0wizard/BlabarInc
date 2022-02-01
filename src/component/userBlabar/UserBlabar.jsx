import React from "react";

const UserBlabar = ({blabar, verify}) => {
  return (
    <div className="top-level">
      <img src={blabar} style={{ marginRight: 7 }} alt="" />
      <span style={{ marginRight: 3 }}>Blabar</span>
      <img src={verify} style={{ marginRight: 10 }} alt="" />
      <span>@Blabar</span>
    </div>
  );
};

export default UserBlabar;
