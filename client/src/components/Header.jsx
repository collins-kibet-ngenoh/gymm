// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h1>Gym Management System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/schedules">Schedules</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header;
