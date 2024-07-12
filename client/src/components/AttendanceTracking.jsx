// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const AttendanceTracking = () => {
  const [attendances, setAttendances] = useState([])
  const [memberId, setMemberId] = useState('')
  const [fitnessClassId, setFitnessClassId] = useState('')

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const response = await api.get('/attendances')
        setAttendances(response.data)
      } catch (error) {
        console.error('Error fetching attendances:', error)
      }
    }
    fetchAttendances()
  }, [])

  const handleAddAttendance = async () => {
    try {
      const response = await api.post('/attendances', { member_id: memberId, fitness_class_id: fitnessClassId })
      setAttendances([...attendances, response.data])
      setMemberId('')
      setFitnessClassId('')
    } catch (error) {
      console.error('Error adding attendance:', error)
    }
  }

  return (
    <div>
      <h2>Attendances</h2>
      <input type="text" placeholder="Member ID" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
      <input type="text" placeholder="Fitness Class ID" value={fitnessClassId} onChange={(e) => setFitnessClassId(e.target.value)} />
      <button onClick={handleAddAttendance}>Add Attendance</button>
      <ul>
        {attendances.map(attendance => (
          <li key={attendance.id}>{attendance.member.name} attended {attendance.fitness_class.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AttendanceTracking;
