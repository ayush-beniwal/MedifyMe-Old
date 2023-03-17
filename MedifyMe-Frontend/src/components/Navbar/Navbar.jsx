import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Hamburger } from './hamburger.svg'
import Brand from "../../assets/Brand.svg";
import Hamburger from "../../assets/Hamburger.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img alt="brand" src={Brand} />
        <p className={styles.brand}>
          MEDIFY<p className={styles.brandIn}>ME</p>
        </p>
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
              <Link to="/contact">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
