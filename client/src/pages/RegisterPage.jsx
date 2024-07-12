// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', { username, email, password })
      window.location.href = '/login'
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default RegisterPage;
