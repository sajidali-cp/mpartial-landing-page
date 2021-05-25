import React from "react";
import Banner from "../../components/Banner/Banner";
import Steps from "../../components/HowItWorks/Steps/Steps";
import styles from "./HowItWorks.module.scss";
export default function HowItWorks() {
  return (
    <div>
      <div className={styles.howItWorks}>
        <div className={styles.container}>
          <Banner heading="How It Works" />
          <div className={styles.data_points}>
            <div className={styles.row}>
              <Steps
                stepNo={1}
                text={
                  <a
                    href="https://www.getinsights.org/matterport-standards/"
                    target="_blank"
                  >
                    Perform pre-mitigation and post-mitigation scans with a
                    Matterport Pro Series camera.
                  </a>
                }
              />
              <Steps
                stepNo={2}
                text={
                  <span>
                    Submit the Matterport scans via the mpartial portal and then
                    go back to what you do great.
                  </span>
                }
              />
              <Steps
                stepNo={3}
                text={
                  <span>
                    Receive a well-formatted, fully documented Xactimate PDF,
                    ESX & Matterport TruePlan SKX.
                  </span>
                }
              />
            </div>
          </div>
          <div className={styles.try_now_btn}>
            <button className={styles.btn}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
