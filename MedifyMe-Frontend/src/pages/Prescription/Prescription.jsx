import Navbar from "../../components/Navbar/Navbar";
import styles from "./Prescription.module.css";

function Prescription() {
  return (
    <>
      <Navbar />
      <div className={styles.PreH}>
        <div className={styles.t1}>Prescription History</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <div className={styles.date}>20Jan 2023</div>
            <div className={styles.c}>
              <img src="" />
            </div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>20Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>20Jan 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <a href="">
          <div className={styles.b}>Create New Record</div>
        </a>
      </div>
      <div className={styles.currMed}>
        <div className={styles.t1}>Current Medications</div>
        <div className={styles.cm}>
          <div className={styles.title}>
            <div className={styles.namet}>Name</div>
            <div className={styles.dosaget}>Dosage</div>
          </div>
          <div className={styles.con}>
            <ol>
              <li>
                Lipitor (atorvastatin) <span className={styles.d}>x1/day</span>
              </li>
              <li>
                Zoloft (sertraline) <span className={styles.d}>x1/day</span>
              </li>
              <li>
                Flonase (fluticasone) <span className={styles.d}>x1/day</span>
              </li>
              <li>
                Metformin <span className={styles.d}>x1/day</span>
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.inst}>
          <a href="">
            <div className={styles.b}>Instructions</div>
          </a>
        </div>
        <div className={styles.dinfo}>
          <ol>
            <li>
              Lipitor (atorvastatin) - usually taken once daily with or without
              food, with dosages ranging from 10mg to 80mg depending on the
              individual's cholesterol levels and medical history.
            </li>
            <li>
              Zoloft (sertraline) - usually taken once daily with or without
              food, with dosages ranging from 25mg to 200mg depending on the
              individual's condition and response to the medication.
            </li>
            <li>
              Zoloft (sertraline) - usually taken once daily with or without
              food, with dosages ranging from 25mg to 200mg depending on the
              individual's condition and response to the medication.
            </li>
          </ol>
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

export default Prescription;
