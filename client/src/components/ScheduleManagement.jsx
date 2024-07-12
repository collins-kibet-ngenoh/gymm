// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([])
  const [fitnessClassId, setFitnessClassId] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await api.get('/schedules')
        setSchedules(response.data)
      } catch (error) {
        console.error('Error fetching schedules:', error)
      }
    }
    fetchSchedules()
  }, [])

  const handleAddSchedule = async () => {
    try {
      const response = await api.post('/schedules', { fitness_class_id: fitnessClassId, date })
      setSchedules([...schedules, response.data])
      setFitnessClassId('')
      setDate('')
    } catch (error) {
      console.error('Error adding schedule:', error)
    }
  }

  return (
    <div>
      <h2>Schedules</h2>
      <input type="text" placeholder="Fitness Class ID" value={fitnessClassId} onChange={(e) => setFitnessClassId(e.target.value)} />
      <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleAddSchedule}>Add Schedule</button>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>{schedule.date} - {schedule.fitness_class.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ScheduleManagement;
