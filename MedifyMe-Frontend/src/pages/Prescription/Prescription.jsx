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
              Amoxicillin: <span className={styles.d}>x1/day</span>
              </li>
              <li>
              Benzocaine: <span className={styles.d}>x1/day</span>
              </li>
              <li>
              Ibuprofen: <span className={styles.d}>x1/day</span>
              </li>
              <li>
              hlorhexidine mouthwash: <span className={styles.d}>x1/day</span>
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
              1. Amoxicillin: This is a common antibiotic that is often prescribed to fight infections in the mouth. The usual adult dose is 500 mg three times a day for 7-10 days. Side effects may include stomach upset, diarrhea, and allergic reactions. 
              Patients should finish the entire course of antibiotics, even if they start feeling better.
              </li>
              <li>
              Benzocaine: This is a topical numbing agent that can be applied directly to the affected tooth and gum area to relieve pain. 
              It can be found in some OTC products such as Orajel and Anbesol.
              
              </li>
              <li>
              3. Ibuprofen: This is a nonsteroidal anti-inflammatory drug (NSAID) that is often used to relieve pain and reduce inflammation in the mouth. The usual adult dose is 200-400 mg every 4-6 hours as needed. Side effects may include stomach upset, nausea, and dizziness. 
              Patients should not take more than the recommended dose and should avoid taking ibuprofen for more than a few days at a time.
              </li>
              <li>
              4. Chlorhexidine mouthwash: This is an antiseptic mouthwash that is often used to reduce the amount of bacteria in the mouth and prevent infection. The usual dose is to rinse with 15 mL of undiluted mouthwash twice daily for 30 seconds. Side effects may include staining of the teeth or tongue, altered taste perception, and dry mouth. 
              Patients should not swallow the mouthwash and should avoid eating or drinking for 30 minutes after rinsing.
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
