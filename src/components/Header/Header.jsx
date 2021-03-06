import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export default function Header() {
  const [toggle, setToggle] = useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <header className={`${styles.main_header}`}>
      <nav className={styles.navBar}>
        <div className={styles.container}>
          <Link to="/" className={styles.mpartial_logo}>
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
          </Link>
          <button type="button" className={styles.navbar_toggler} onClick={handleToggle}>
            <span className={styles.navbar_toggler_icon}></span>
          </button>
          <div className={`${styles.navbar_collapse} ${toggle ? styles.show:""}`}>
            <ul>
              <li>
                <Link to="/" className={styles.nav_link}>
                  Ground-Truth Data
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav_link}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav_link}>
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav_link}>
                  Example Deliverables
                </Link>
              </li>
              <li>
                <Link className={styles.nav_link} to="">
                  Submission Portal
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav_link}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav_link}>
                  <button className={styles.login_btn}>Sign In</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
