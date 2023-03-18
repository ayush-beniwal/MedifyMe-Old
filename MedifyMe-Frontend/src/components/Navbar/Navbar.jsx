import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../../assets/Brand.svg";
import Hamburger from "../../assets/Hamburger.svg";
import styles from "./Navbar.module.css";
import Account from "../../assets/account.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img alt="brand" src={Brand} />
          <p className={styles.brand}>
            MEDIFY<p className={styles.brandIn}>ME</p>
          </p>
        </div>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
          <img alt="bike" src={Hamburger} />
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
                <Link to="/login">Sign In</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
