import Navbar from "../components/Navbar/Navbar";
import styles from "./home.module.css";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div className="styles.herosection">
        <div className={styles.img1}>
          <img src="img1.png" />
        </div>
        <div className={styles.content}>
            <div className={styles.content1}>CARING FOR LIFE</div>
            <div className={styles.content2}>Paving the Way <br></br> for Medical Excellence</div>
            <button className={styles.content3}>Get Started</button>
        </div>
        <div className={styles.group}>
          <img src="Group.png" />
        </div>
        {/* <div className={styles.button}>
          <a>
            <div className={styles.b1}>
              Book an Appointment
              <img src="cash.png"/>
            </div>
          </a>
          <a>
            <div className={styles.b2}>
            Book an Appointment
              <img src="cash.png"/>
            </div>
          </a>
          <a>
            <div className={styles.b3}>
            Book an Appointment
              <img src="cash.png"/>
            </div>
          </a>
        </div> */}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
