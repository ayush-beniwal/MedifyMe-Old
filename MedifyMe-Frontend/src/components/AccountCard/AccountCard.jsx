import { Link } from "react-router-dom";
import styles from "./AccountCard.module.css";

function AccountCard() {
  return (
    <div className={styles.left_wrapper}>
      <div className={styles.card}>
        <img src="Ellipse250.png" alt="" className={styles.img} />
        <div>
          <h2 className={styles.id}>ID: #SA2347OLF</h2>
          <p className={styles.general_p}>
          <Link to="/account">
            <a className={styles.general_settings} href="">
              General Settings
            </a>
            </Link>
          </p>
          <p className={styles.manage_p}>
          <Link to="/manage_doctors">
            <a className={styles.manage_docters} href="">
              Manage Doctor
            </a>
            </Link>
          </p>
          <p className={styles.payment_p}>
          <Link to="/payments">
            <a className={styles.payment_settings} href="">
              Payment Settings
            </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
