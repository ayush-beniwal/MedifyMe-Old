import Navbar from "../../components/Navbar/Navbar";
import styles from "./Manage_docters.module.css";
import AccountCard from "../../components/AccountCard/AccountCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <AccountCard />
        <div className={styles.right_wrapper}>
        <div className={styles.logout}><a className={styles.logout_link}href="">Logout</a></div>
         <div className={styles.doctor_history}><p className={styles.doctor_history_content}>Doctor History</p></div>
         <div className={styles.doctor1} >
            <p className={styles.doctor_name1}>1. Dr Karen Davis</p>
            <p className={styles.doctor_contact1}>03/07/2023 to 24/07/2023</p>
         </div>

         <div className={styles.doctor2} >
            <p className={styles.doctor_name2}>2. Dr John Smith</p>
            <p className={styles.doctor_contact2}>03/07/2023 to 24/07/2023</p>
         </div>

        </div>
      </div>
    </>
  );
}

export default Home;
