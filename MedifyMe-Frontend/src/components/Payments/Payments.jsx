import styles from "./Payments.module.css";

function Home() {
  return (
    <div className={styles.right_wrapper}>
      <div className={styles.logout}>
        <a className={styles.logout_link} href="">
          Logout
        </a>
      </div>
      <img
        className={styles.img_payment}
        src={import.meta.env.BASE_URL + "image 4.png"}
        alt="payment"
        width="500"
        height="600"
      />
      <div className={styles.payments_content}>No Payments to show!</div>
    </div>
  );
}

export default Home;
