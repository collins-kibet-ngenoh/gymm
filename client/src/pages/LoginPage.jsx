// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password })
      localStorage.setItem('token', response.data.access_token)
      window.location.href = '/'
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage;
