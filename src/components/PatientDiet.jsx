import Card from "./featurecard";
import DashboardNav from "./dashboardnav";
import Footer from "./Footer";
import "./mydiet.css";
function ReaminderCard({ color, description }) {
  return (
    <div className="ReminderCard" id={color}>
      <h2 className="ReminderCard__description">{description}</h2>
    </div>
  );
}
export default function Patientdiet() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__nav">
          <div className="profile">
            <img
              src="./public/img/doctor.jpg"
              alt="doctor"
              style={{ height: "100px", marginLeft: "40px" }}
            />
            <h4>Dr Amrit Singh</h4>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            <a>View patients</a>
            <a>Edit info</a>
            <a>Dashboard</a>
          </div>
        </div>
        <h1>Patient diet</h1>
        <div className="box-1">
          <h2>Breakfast</h2>
          <p></p>
        </div>
        <div className="box-2">
          <h2>Lunch</h2>
          <p></p>
        </div>
        <div className="box-3">
          <h2>Dinner</h2>
          <p></p>
        </div>
        <div className="supplements">
          <h2>Supplements</h2>
          <p></p>
        </div>
        <button className="btn">Post diet</button>
        <Footer />
      </div>
    </>
  );
}
