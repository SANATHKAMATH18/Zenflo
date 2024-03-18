import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import DashboardDoc from './components/dashboarddoc'
import ViewPatients from './components/viewpatients'
import BookAppointment from './components/Bookappointment'
function App() {

  return (
    <>
      {/* <Dashboard /> page-1*/}
      {/* <DashboardDoc /> Page 2*/}
      {/* <ViewPatients /> Page 3*/}
      <BookAppointment /> 
    </>
  )
}

export default App
