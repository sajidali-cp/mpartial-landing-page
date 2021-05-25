import React, { useState } from "react";
import Slider from "react-rangeslider";
import { format } from "../../helperfunctions/minifyNumber";
import "./RangeSlider.css";
import styles from "./RangeSlider.module.scss";
export default function RangeSlider() {
  const [state, setstate] = useState(0);
  const handleOnChange = (value) => {
    setstate(value);
    console.log(value);
  };
  return (
    <div className={styles.wrapper}>
      <Slider
        tooltip={true}
        min={0}
        max={1000000}
        step={50000}
        value={state}
        format={() => (
          <span>
            <div class="slider_tooltip_price">${format(state)}</div>
            <div class="slider_tooltip_text">Estimate Grand Total</div>
          </span>
        )}
        onChange={handleOnChange}
      />
      <ul className={styles.row}>
        <li className={styles.col}>$0</li>
        <li className={styles.col}>$250,000</li>
        <li className={styles.col}>$500,000</li>
        <li className={styles.col}>$750,000</li>
        <li className={styles.col}>$1M+</li>
      </ul>
    </div>
  );
}
