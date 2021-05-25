import React from "react";
import styles from "./PlanCard.module.scss";
import ReactTooltip from "react-tooltip";
export default function PlanCard({ heading, authorities,amount }) {
  return (
    <>
      {heading === "Trial Plan" ? <div className={styles.col_lg_1}></div> : ""}
      <div className={styles.col_lg_5}>
        <div className={styles.fee_box}>
          <div
            className={`${styles.header} ${
              heading === "Trial Plan" ? styles.trial : styles.enterPrice
            }`}
          >
            <div>{heading}</div>
            <span data-tip data-for="registerTip" className={styles.info_popup}>
              i
            </span>

            <ReactTooltip
              id="registerTip"
              place="top"
              effect="solid"
              className={styles.custom_tooltip}
            >
              Fee Structure Example: An estimate grand total of $100k will
              result in a fee of 7.36% ($7,360). The $750 deposit will be
              collected upon submission and applied toward the overarching fee.
            </ReactTooltip>
          </div>
          <div className={styles.body}>
            <h4>6.24%</h4>
            <div
              style={{
                height: "100px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {authorities.map((item) => (
                <div className={styles.flexRow}>
                  <div className={styles.imgDiv}>
                    <img
                      src="/assets/check.png"
                      width="14px"
                      className="mr-2"
                    />{" "}
                  </div>
                  <div> {item}</div>
                </div>
              ))}
            </div>
            <h4 style={{fontSize: "30px"}}>{amount}</h4>
          </div>
          <div className={styles.footer}>[$750 Minimum]</div>
        </div>
      </div>
      {heading != "Trial Plan" ? <div className={styles.col_lg_1}></div> : ""}
    </>
  );
}
