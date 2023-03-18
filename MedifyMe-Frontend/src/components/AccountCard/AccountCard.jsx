import styles from "./AccountCard.module.css";

function AccountCard() {
  return (
    <div className={styles.left_wrapper}>
      <div className={styles.card}>
        <img src="Ellipse250.png" alt="" className={styles.img} />
        <div>
          <h2 className={styles.id}>ID: #SA2347OLF</h2>
          <p className={styles.general_p}>
            <a className={styles.general_settings} href="">
              General Settings
            </a>
          </p>
          <p className={styles.manage_p}>
            <a className={styles.manage_docters} href="">
              Manage Doctor
            </a>
          </p>
          <p className={styles.payment_p}>
            <a className={styles.payment_settings} href="">
              Payment Settings
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
  