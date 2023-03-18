import Navbar from "../components/Navbar/Navbar";
import styles from "./Manage_docters.module.css";
import AccountCard from "../components/AccountCard/AccountCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <AccountCard />
        <div className={styles.right_wrapper}>
          <img
            className={styles.img_payment}
            src="image 4.png"
            alt="payment"
            width="500"
            height="600"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
