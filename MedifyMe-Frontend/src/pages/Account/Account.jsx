import Navbar from "../../components/Navbar/Navbar";
import styles from "./Account.module.css";
import AccountCard from "../../components/AccountCard/AccountCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <AccountCard />
        <div className={styles.right_wrapper}>
          <form>
            <div className="row">
              <label className={styles.colorprofilepic} htmlFor="profile-pic">
                Profile Picture:
              </label>
              <input
                className={styles.input_profile}
                type="file"
                id="profile-pic"
                name="profile-pic"
              />
            </div>

            <div className="row">
              <label className={styles.colorname} htmlFor="name">
                Name:
              </label>
              <input
                className={styles.input_text}
                type="text"
                id="name"
                name="name"
                value="name"
                required
              />
            </div>

            <div className="row-sex-age">
              <label className={styles.colorgender} htmlFor="sex">
                Sex:
              </label>
              <select
                className={styles.input_text}
                id="sex"
                name="sex"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label className={styles.colorage} htmlFor="age">
                Age:
              </label>
              <input
                className={styles.input_text}
                type="text"
                id="age"
                name="age"
                value="age"
                required
              />
            </div>

            <div className="row">
              <label className={styles.coloremail} htmlFor="email">
                Email Address:
              </label>
              <input
                className={styles.input_text}
                type="email"
                id="email"
                name="email"
                value="Email"
                required
              />
            </div>

            <div className="row">
              <label className={styles.colormobile} htmlFor="mobile">
                Mobile Number:
              </label>
              <input
                className={styles.input_text}
                type="tel"
                id="mobile"
                name="mobile"
                value="Mobile No."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
