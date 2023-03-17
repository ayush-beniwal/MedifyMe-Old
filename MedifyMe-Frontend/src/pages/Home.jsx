import Navbar from "../components/Navbar/Navbar";
import styles from "./home.module.css";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.herosection}>
        <div className={styles.img1}>
          <img src="img1.png" />
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>CARING FOR LIFE</div>
          <div className={styles.content2}>
            Paving the Way <br></br> for Medical Excellence
          </div>
          <a href="">
            <div className={styles.content3}>Get Started</div>
          </a>
        </div>
        <div className={styles.group}>
          <img src="Group.png" />
        </div>
        <div className={styles.button}>
          <a href="">
            <div className={styles.b1}>
              Book an Appointment
              <img src="cash.png" />
            </div>
          </a>
          <a href="">
            <div className={styles.b2}>
              Book an Appointment
              <img src="cash.png" />
            </div>
          </a>
          <a href="">
            <div className={styles.b3}>
              Book an Appointment
              <img src="cash.png" />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.lp1}>Welcome to Medifyme</div>
      <div className={styles.lp2}>
        An AI Powered Platform for Managing Health Records
      </div>
      <div className={styles.lp3}>
        Discover a better way to manage your health records. MedifyMe helps
        <br></br> you manage your healthcare needs easily and efficiently.
        <br></br>
        Simplify your healthcare management today.
      </div>
      <div className={styles.landImage}>
        <img src="LandImage.png" />
      </div>
      <div className={styles.lp4}>Care you can believe in</div>
      <div className={styles.lp5}>Our Services</div>
      <div className={styles.lp6}>A Passion for putting patients first.</div>
      <div className={styles.lp7}>
        <ul>
          <li>A Passion for Healing</li>
          <li>All our Best</li>
          <li>A Legacy of Excellence</li>
        </ul>
        <ul>
          <li>5-Star Care</li>
          <li>Believe in Us</li>
          <li>Always Caring</li>
        </ul>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
