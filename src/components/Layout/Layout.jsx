import React from "react";
import SideBar from "../SlideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import Router from "../../routes/Router";

const Layout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="main_layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
