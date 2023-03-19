import Navbar from "../../components/Navbar/Navbar";
import styles from "./Test.module.css";

function Test() {
  return (
    <>
      <Navbar />
      <div className={styles.PreH}>
        <div className={styles.t1}>Reports History</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <div className={styles.date1}>20 Jan 2023</div>
            <div className={styles.c}>
              <img src="" />
            </div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date1}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date1}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date1}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date1}>20Jan 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <a href="">
          <div className={styles.b}>Create New Record</div>
        </a>
      </div>


      <div className={styles.docvisit}>
        <div className={styles.t1}>Latest test taken</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <img className={styles.img_size} src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img className={styles.img_size} src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img className={styles.img_size} src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img className={styles.img_size} src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img  className={styles.img_size} src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
        </div>
      </div>


      <div className={styles.currentPres}>
        <div className={styles.ct}>
          <div className={styles.ct1}>Test Report</div>
          <div className={styles.ct2}>20 Jan 2023</div>
        </div>
        <div className={styles.cont}>
          <div className={styles.accordian}>
            <ul>
              <li>
              Amit's normal blood test report indicates a healthy immune system and proper organ function.
              </li>
              <li>
              Regular check-ups and blood tests are important for detecting potential health issues early on.
              </li>
              <li>
              A balanced diet and exercise routine can help maintain optimal blood test results.
It's important to consult with a healthcare professional to fully understand the implications of blood test results.
              </li>
              <li>
It's important to consult with a healthcare professional to fully understand the implications of blood test results.
              
              </li>
            </ul>
          </div>
          <div className={styles.photo}></div>
        </div>
      </div>
    </>
  );
}

export default Test;
