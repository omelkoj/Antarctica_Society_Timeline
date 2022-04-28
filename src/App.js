import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";
import "./TitlebarImageList";
import "./WebImage";
import WebImage from "./WebImage";

export default function App() {
  return (
    <div>
    <WebImage/>
    <div className="App">
      <div className="sample_div">
      </div>
          <div className="move_main_content" >
          <Chrono items={data} mode="HORIZONTAL" />
          </div>
        </div>
        </div>
  );
}
