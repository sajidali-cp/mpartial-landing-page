import React from "react";
import styles from "./Footer.module.scss"
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p>
              mpartial, a 4D Schematics Company. Copyright 2020 all rights
              reserved.
            </p>
          </div>
          <div className={styles.col}>
            <ul className={styles.social_links}>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/mpartial1/"
                  aria-label="Facebook"
                  rel="noopener"
                >
                  <img src="/assets/facebook.svg" />{" "}
                </a>{" "}
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mpartial_/"
                  aria-label="Instagram"
                  rel="noopener"
                >
                  <img src="/assets/insta.svg" />{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/mpartial-keep-building"
                  aria-label="Linkedin"
                  rel="noopener"
                >
                  <img src="/assets/linkedIn.svg" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
