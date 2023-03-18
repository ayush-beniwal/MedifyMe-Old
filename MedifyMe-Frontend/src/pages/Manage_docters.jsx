import Navbar from "../components/Navbar/Navbar";
import styles from "./Manage_docters.module.css";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <div className={styles.left_wrapper}> 
        <div className={styles.card}>
            <img src="Ellipse 250.png" alt="" className={styles.img} />
            <div class="card-content">
            <h2 className={styles.id}>ID: #SA2347OLF</h2>
            <p className={styles.general_p}><a className={styles.general_settings} href=""> General Settings</a></p>
            <p className={styles.manage_p}><a className={styles.manage_docters} href=""> Manage Docter</a></p>
            <p className={styles.payment_p}><a className={styles.payment_settings} href=""> Payment Settings</a></p>
         </div>
        </div>
        
        </div>
        <div className={styles.right_wrapper}>
        <img  className={styles.img_payment} src="image 4.png" alt="Girl in a jacket" width="500" height="600"/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
