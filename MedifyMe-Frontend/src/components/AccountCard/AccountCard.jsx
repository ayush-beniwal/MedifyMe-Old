import { Link, useLocation } from "react-router-dom";
import styles from "./AccountCard.module.css";

function AccountCard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={styles.left_wrapper}>
      <div className={styles.card}>
        <img
          src={import.meta.env.BASE_URL + "Ellipse250.png"}
          alt=""
          className={styles.img}
        />
        <div className={styles.list}>
          <h2 className={styles.id}>ID: #SA2347OLF</h2>
          <p className={styles.margin_top}>
            <Link
              className={
                location.pathname === "/settings/account"
                  ? styles.selected
                  : styles.default
              }
              to="/settings/account"
            >
              General Settings
            </Link>
          </p>
          <p className={styles.margin_top}>
            <Link
              className={
                location.pathname === "/settings/manage_doctors"
                  ? styles.selected
                  : styles.default
              }
              to="/settings/manage_doctors"
            >
              Manage Doctor
            </Link>
          </p>
          <p className={styles.margin_top}>
            <Link
              className={
                location.pathname === "/settings/payment"
                  ? styles.selected
                  : styles.default
              }
              to="/settings/payment"
            >
              Payment Settings
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
