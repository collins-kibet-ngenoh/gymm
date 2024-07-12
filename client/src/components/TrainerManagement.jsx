// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const TrainerManagement = () => {
  const [trainers, setTrainers] = useState([])
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await api.get('/trainers')
        setTrainers(response.data)
      } catch (error) {
        console.error('Error fetching trainers:', error)
      }
    }
    fetchTrainers()
  }, [])

  const handleAddTrainer = async () => {
    try {
      const response = await api.post('/trainers', { name, specialty })
      setTrainers([...trainers, response.data])
      setName('')
      setSpecialty('')
    } catch (error) {
      console.error('Error adding trainer:', error)
    }
  }

  return (
    <div>
      <h2>Trainers</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
      <button onClick={handleAddTrainer}>Add Trainer</button>
      <ul>
        {trainers.map(trainer => (
          <li key={trainer.id}>{trainer.name} - {trainer.specialty}</li>
        ))}
      </ul>
    </div>
  )
}

export default TrainerManagement;
