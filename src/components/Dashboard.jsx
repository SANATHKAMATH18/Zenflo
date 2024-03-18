import Card from "./featurecard"
import DashboardNav from "./dashboardnav"
import Dashboardgraph from "./dashboardgraph"
import Footer from "./Footer"
import './dashboard.css'
function ReaminderCard({color,description})
{
    return(
    <div className='ReminderCard' id={color}> 
    <h2 className='FeatureCard__description'>{description}</h2>
    </div>)
}
export default function Dashboard()
{
    return (
      <>
        <div className="dashboard">
          <div className="dashboard__top">
            <h2>Mon,18th march</h2>
          </div>
          <DashboardNav />
          <div className="Card-container-1">
            <Card description="Diet" color="Card1" />
            <Card description="Next Checkup" color="Card2" />
          </div>
          <div className="Card-container-2">
            <Card description="Book appointments" color="Card3" />
            <Card description="Books" color="Card4" />
          </div>
          <div className="reminders">
            <h2>Remainders</h2>
            <ReaminderCard
              description="Medicine due in 45 minutes"
              color="blue"
            />
            <ReaminderCard description="Stay hydrated" color="orange" />
            <ReaminderCard description="Take supplements" color="pink" />
          </div>
          <div className="box-1">
            <h1>MRS Sharma</h1>
            <p>History</p>
          </div>
          <div className="box-2">
            <img class="doctor" src="./public/img/doctor.jpg" alt="doctor" />
            <p>
              Welcome to the practice of Dr. [Name], your dedicated partner in
              women's health and pregnancy journey. With a blend of expertise,
              compassion, and personalized care, Dr. [Name] specializes in
              obstetrics and gynecology, guiding you through every stage of
              womanhood with confidence and comfort. From routine check-ups to
              complex pregnancies, rest assured you're in capable hands. Your
              health and well-being are our top priorities. Schedule your
              appointment today and embark on a journey of care tailored just
              for you.
            </p>
          </div>
          {/* <div className="dashboardHeading">
            <h1>Good Morning 👋</h1>
            <h4 className="dashboard__date">📆Mon,4 Mar</h4>
            <h4 className="dashboard__temp">
              🌥️ 16<sup>o</sup>F
            </h4>
            <button type="button" class="btn btn-primary btn-sm">
              +
            </button>
          </div>
         
          <div className="new-chat">
            <h4>New Chat</h4>
            <h5>List</h5>
            <textarea name="list" id="list_items" cols="37" rows="12"></textarea>
          </div>
          <div className="remainders">
            <h3>Upcoming remainders</h3>
          </div>
          <div className="doc">
            <h1>Docs</h1>
          </div> */}
        </div>
      </>
    );
}
