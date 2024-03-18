import Card from "./featurecard";
import DashboardNav from "./dashboardnav";
import Footer from "./Footer";
import "./mydiet.css"
function ReaminderCard({ color, description }) {
  return (
    <div className="ReminderCard" id={color}>
      <h2 className="ReminderCard__description">{description}</h2>
    </div>
  );
}
export default function Mydiet() {
  return (
    <>
    <div className="dashboard">
        <DashboardNav />
        <h1>My Diet</h1>
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
        <Footer />
      </div>
    </>
  );
}
