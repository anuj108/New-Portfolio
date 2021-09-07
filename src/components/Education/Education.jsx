import "./education.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
    return () => {};
  }, []);
  return (
    <div className="Education" id="education">
      <div className="top1">
        <h1 class="hover-underline-animation">EDUCATION</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/raise.png" className="user" alt="" />
          </div>
          <div className="bottom">
            <h2>CLASS 10TH</h2>
          </div>
          <div className="center">
            <h3>
              I successfully passed 10th standard(2018) from S.T TERESA'S
              CONVENT SCHOOL, GHAZIABAD. Percentage: 89.8%
            </h3>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img src="assets/12th.png" className="user" alt="" />
          </div>
          <div className="bottom">
            <h2>CLASS 12TH</h2>
          </div>
          <div className="center">
            <h3>
              I successfully passed 12th standard(2020) from D.A.V PUBLIC
              SCHOOL, GHAZIABAD. Percentage: 89.2%
            </h3>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img src="assets/college.png" className="user" alt="" />
          </div>
          <div className="bottom">
            <h2>COLLEGE</h2>
          </div>
          <div className="center">
            <h3>
              I successfully will pass B-Tech(2024) from ABES ENGINEERING
              COLLEGE, GHAZIABAD. (currently in first year) Cgpa: --
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
