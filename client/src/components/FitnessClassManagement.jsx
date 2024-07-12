// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const FitnessClassManagement = () => {
  const [classes, setClasses] = useState([])
  const [name, setName] = useState('')
  const [trainerId, setTrainerId] = useState('')

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.get('/fitness_classes')
        setClasses(response.data)
      } catch (error) {
        console.error('Error fetching classes:', error)
      }
    }
    fetchClasses()
  }, [])

  const handleAddClass = async () => {
    try {
      const response = await api.post('/fitness_classes', { name, trainer_id: trainerId })
      setClasses([...classes, response.data])
      setName('')
      setTrainerId('')
    } catch (error) {
      console.error('Error adding class:', error)
    }
  }

  return (
    <div>
      <h2>Fitness Classes</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Trainer ID" value={trainerId} onChange={(e) => setTrainerId(e.target.value)} />
      <button onClick={handleAddClass}>Add Class</button>
      <ul>
        {classes.map(fitnessClass => (
          <li key={fitnessClass.id}>{fitnessClass.name} - {fitnessClass.trainer.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FitnessClassManagement;
