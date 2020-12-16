import "modules/font-awesome/css/font-awesome.min.css";
import "modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React from "react";
import Menu from "../template/menu/Menu";
import Routes from "./routes";

export default (props) => (
  <div>
    <Menu />
    <Routes />
  </div>
);
