import Navbar from "../../components/Navbar/Navbar";
import styles from "./HealthHistory.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetchHealthHistoryQuery } from "../../store";

function HealthHistory() {
  const navigate = useNavigate();
  const patient = useSelector((state) => {
    return state.patient;
  });

  useEffect(() => {
    if (!patient.isLoggedIn) {
      navigate("/login");
      toast.error("Please login to continue");
    }
  }, [navigate, patient.isLoggedIn]);

  const { data, error, isFetching } = useFetchHealthHistoryQuery(patient.id);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.history}>
          <img src={data.photo} />
          <div className={styles.d1}>
            <ul>
              <li>Name : &nbsp;&nbsp;{data.name}</li>
              <li>Sex : &nbsp;&nbsp;{data.gender}</li>
              <li>Age : &nbsp;&nbsp;{data.age}</li>
            </ul>
            <ul>
              <li>Allergies : &nbsp;&nbsp;{data.allergies}</li>
              <li>Other Conditions : &nbsp;&nbsp;{data.otherConditions}</li>
              <li>Weight : &nbsp;&nbsp;{data.weight} kg</li>
            </ul>
            <ul>
              <li>Medications : &nbsp;&nbsp;{data.medications}</li>
              <li>Height : &nbsp;&nbsp;{data.height} cm</li>
            </ul>
          </div>
          <div className={styles.d2}>
            <ul>
              <li>Overview : &nbsp;&nbsp;{data.overview}</li>
            </ul>
          </div>
        </div>
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
          <div className={styles.doc2}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc2}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc2}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
          <div className={styles.doc2}>
            <img src="doc.png" />
            <div>
              <div className={styles.t2}>Dentist</div>
              <div className={styles.t3}>Dr. Roman Reigns</div>
            </div>
            <div className={styles.date}>&#128197; 20Jan 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <a href="">
          <div className={styles.b}>Create New Record</div>
        </a>
      </div>
      <div className={styles.infobox}>
        <div className={styles.title}>
          <div className={styles.title1}>Dr. Brock Lee</div>
          <div className={styles.title2}>20 Jan 2023</div>
        </div>
        <div className={styles.boxes}>
          <div className={styles.doccomments}>
            <div className={styles.doccommentst}>Doctors Comments</div>
            <div className={styles.comments}>
              Sarah has been experiencing stomach ache since she ate pizza last
              night. The pain is around 7 on a scale of 1 to 10 and touching the
              area makes it worse.
            </div>
          </div>
          <div className={styles.doccomments}>
            <div className={styles.doccommentst}>Patient Comments</div>
            <div className={styles.comments}>
              Sarah has been experiencing stomach ache since she ate pizza last
              night. The pain is around 7 on a scale of 1 to 10 and touching the
              area makes it worse.
            </div>
          </div>
          <div className={styles.doccomments}>
            <div className={styles.documentst}>Uploaded Documents</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthHistory;
