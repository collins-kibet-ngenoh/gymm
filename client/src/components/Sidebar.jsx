// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/schedules">Schedules</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar;
