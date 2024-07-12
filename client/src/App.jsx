// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MemberManagement from './components/MemberManagement'
import TrainerManagement from './components/TrainerManagement'
import FitnessClassManagement from './components/FitnessClassManagement'
import ScheduleManagement from './components/ScheduleManagement'
import AttendanceTracking from './components/AttendanceTracking'
import PaymentManagement from './components/PaymentManagement'
import Auth from './components/Auth'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/members" element={<Auth><MemberManagement /></Auth>} />
          <Route path="/trainers" element={<Auth><TrainerManagement /></Auth>} />
          <Route path="/classes" element={<Auth><FitnessClassManagement /></Auth>} />
          <Route path="/schedules" element={<Auth><ScheduleManagement /></Auth>} />
          <Route path="/attendance" element={<Auth><AttendanceTracking /></Auth>} />
          <Route path="/payments" element={<Auth><PaymentManagement /></Auth>} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
