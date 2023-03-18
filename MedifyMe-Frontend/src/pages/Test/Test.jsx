import Navbar from "../../components/Navbar/Navbar";
import styles from "./Test.module.css";

function Test() {
  return (
    <>
      <Navbar />
      <div className={styles.PreH}>
        <div className={styles.t1}>Prescription History</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <div className={styles.date1}>20Jan 2023</div>
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
        <div className={styles.t1}>Doctors Visits</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <img src="doc.png" />
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
          <div className={styles.ct1}>Current Prescription</div>
          <div className={styles.ct2}>20 Jan 2023</div>
        </div>
        <div className={styles.cont}>
          <div className={styles.accordian}>
            <ul>
              <li>
                Lipitor (atorvastatin) : Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto quas nisi unde! Ut doloremque id
                possimus alias amet at consequatur dolores dolor pariatur, nobis
                voluptatum accusantium eos commodi facilis temporibus?
              </li>
              <li>
                Zoloft (sertraline) :  Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto quas nisi unde! Ut doloremque id
                possimus alias amet at consequatur dolores dolor pariatur, nobis
                voluptatum accusantium eos commodi facilis temporibus?{" "}
              </li>
              <li>
                Flonase (fluticasone)  : Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto quas nisi unde! Ut doloremque id
                possimus alias amet at consequatur dolores dolor pariatur, nobis
                voluptatum accusantium eos commodi facilis temporibus?
              </li>
              <li>
                Metformin : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto quas nisi unde! Ut doloremque id possimus alias amet
                at consequatur dolores dolor pariatur, nobis voluptatum
                accusantium eos commodi facilis temporibus?
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
