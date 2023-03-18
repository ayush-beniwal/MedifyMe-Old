import Navbar from "../../components/Navbar/Navbar";
import styles from "./Manage_doctors.module.css";
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
        
         <div className={styles.doctor} >
            <p className={styles.doctor_name}>1. Dr Karen Davis</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>
         

         <div className={styles.doctor} >
            <p className={styles.doctor_name}>2. Dr John Smith</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>

         <div className={styles.doctor} >
            <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>
         <div className={styles.doctor} >
            <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>
         
          
        
         <div className={styles.doctor_history}><p className={styles.doctor_history_content}>Current Doctor</p></div>
         
         <div className={styles.doctor} >
            <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>

         <div className={styles.doctor} >
            <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
            <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
         </div>
            
         <div className={styles.doctor_history}><p className={styles.doctor_history_content}>Add New Doctors</p></div>
            
         <div className={styles.row}>
         <div className={styles.add_doctor_info}>
              <label className={styles.add_text_doctor} htmlFor="email">
              Doctor Id:
              </label>
              <input
                className={styles.add_doctor_name}
                type="name"
                id="name"
                name="name"
                required
              />
            </div>
            <button className={styles.submit_button}type="submit">Submit</button>
            </div>
            
            
        </div>
      </div>
    </>
  );
}

export default Home;
