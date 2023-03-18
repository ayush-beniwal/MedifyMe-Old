import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../../assets/Brand.svg";
import Hamburger from "../../assets/Hamburger.svg";
import styles from "./Navbar.module.css";
import Account from "../../assets/account.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const patient = useSelector((state) => {
    return state.patient;
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link to="/">
            <img alt="brand" src={Brand} />
            <p className={styles.brand}>
              MEDIFY<p className={styles.brandIn}>ME</p>
            </p>
          </Link>
        </div>
        <div className={styles.nav_elements}>
          <ul>
            <li>
              <Link to="/health_history">Health History</Link>
            </li>
            <li>
              <Link to="/prescription">Prescriptions</Link>
            </li>
            <li>
              <Link to="/tests">Tests & Reports</Link>
            </li>
            <li>
              <div className={styles.appointment}>
                <Link style={{ color: "black" }} to="/appointment">
                  Appointment
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.signIn}>
                <img alt="account" src={Account} />
                {!patient.isLoggedIn ? (
                  <Link to="/login">Sign In</Link>
                ) : (
                  <Link to="/login"></Link>
                )}
                <Link to="/account">Account</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
