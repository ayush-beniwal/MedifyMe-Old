import styles from "./Navbar.module.css";
import {useState} from "react"
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div onClick={()=>Close()} />
      <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
        <div className={styles.nav_container}>
          <Link exact to="/" className={styles.nav_logo}>
            CodeBucks
            <i class="fa fa-code"></i>
          </Link>
          <ul class={click ? "nav_menu active" : "nav_menu"}>
            <li className={styles.nav_item}>
              <Link
                exact
                to="/"
                activeClassName="active"
                className={styles.nav_links}
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                exact
                to="/about"
                activeClassName="active"
                className={styles.nav_links}
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className={styles.nav_links}
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className={styles.nav_links}
               onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={styles.nav_icon} onClick={handleClick}>
            <i class={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Navbar;