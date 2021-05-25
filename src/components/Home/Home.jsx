import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
export default function Home() {
  return (
      <div className={styles.home_video_background}>
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          width="1388"
          height="780"
          // style={{
          //   positioN: "absolute",
          //   width: "100%",
          //   height: "auto",
          //   top: "-61.875px",
          //   left: "0px",
          //   right:"0px"
          // }}
        >
          <source
            src="/assets/homepage.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.slider_down_btn}></div>
      </div>
  );
}
