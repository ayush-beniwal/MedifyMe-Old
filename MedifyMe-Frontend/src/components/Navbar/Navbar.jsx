import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Hamburger } from './hamburger.svg'
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
              <Link to="/">Health History</Link>
            </li>
            <li>
              <Link to="/blog">Prescriptions</Link>
            </li>
            <li>
              <Link to="/projects">Tests & Reports</Link>
            </li>
            <li>
              <Link to="/about">Appointment</Link>
            </li>
            <li>
              <div className={styles.signIn}>
              <img alt="account" src={Account} /> 
              <Link to="/contact">Sign In</Link>
              </div>
      
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
