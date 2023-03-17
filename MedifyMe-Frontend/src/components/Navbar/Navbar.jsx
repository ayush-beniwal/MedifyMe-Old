import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Hamburger } from './hamburger.svg'
// import { ReactComponent as Brand } from './logo.svg'
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>{/* <Brand /> */}</div>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
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
