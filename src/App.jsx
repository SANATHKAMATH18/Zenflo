import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import DashboardDoc from './components/dashboarddoc'
import ViewPatients from './components/viewpatients'
import BookAppointment from './components/Bookappointment'
import Faq from "./components/Faq"
import Mydiet from "./components/mydiet"
import patientDiet from "./components/PatientDiet"
import PatientDiet from './components/PatientDiet'
function App() {

  return (
    <>
    <Mydiet />
    <PatientDiet />
      {/* <Dashboard /> page-1 */}
      {/* <DashboardDoc /> Page 2 */}
      {/* <ViewPatients />  */}
      {/* <Faq /> */}
      {/* <BookAppointment />  */}
    </>
  )
}

export default App
