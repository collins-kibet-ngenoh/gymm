// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const MemberManagement = () => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get('/members')
        setMembers(response.data)
      } catch (error) {
        console.error('Error fetching members:', error)
      }
    }
    fetchMembers()
  }, [])

  return (
    <div>
      <h2>Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.name} - {member.membership_type}</li>
        ))}
      </ul>
    </div>
  )
}

export default MemberManagement;
