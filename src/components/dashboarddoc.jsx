import Card from "./featurecard"
import DashboardNav from "./dashboardnav"
import Footer from "./Footer"
import './dashboard.css'
function ReaminderCard1({color,description})
{
    return(
    <div className='ReminderCard' id={color}> 
    <h2 className='RemainderCard__description'>{description}</h2>
    </div>)
}
export default function DashboardDoc()
{
    return (
      <>
        <div className="dashboard">
          <div className="dashboard__top">
            <h2>Mon,18th march</h2>
          </div>
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
          <div className="Card-container-1">
            <Card description="Diet" color="Card1" />
            <Card description="Next Checkup" color="Card2" />
          </div>
          <div className="Card-container-2">
            <Card description="Book appointments" color="Card3" />
            <Card description="Books" color="Card4" />
          </div>
          <div className="reminders">
            <h2 style={{ color: "black" }}>Reminders</h2>
            <ReaminderCard1
              description="Medicine due in 45 minutes"
              color="blue"
            />
            <ReaminderCard1 description="Stay hydrated" color="orange" />
            <ReaminderCard1 description="Take supplements" color="pink" />
          </div>
          <div className="box-1">
            <h1>MRS Sharma</h1>
            <p>History</p>
          </div>
          <div className="box-2">
            <img
              class="doctor"
              src="./public/img/download.png"
              style={{ height: "100px" }}
              alt="doctor"
            />
            <p>
              - **Patient**: Rucha Sharma - **DOB**: May 12, 1990 - **Contact**:
              (555) 123-4567, rucha.sharma@email.com - **Medical History**: No
              major issues. Previous healthy pregnancy. - **Prenatal**: Due:
              Sept 20, 2024. Normal progress. - **Family History**: Maternal
              grandmother: hypertension. - **Notes**: Interested in natural
              birth. Discussed care, nutrition, discomforts, resources.
            </p>
          </div>
          <Footer />
        </div>
      </>
    );
}
