// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import api from '../api'

const PaymentManagement = () => {
  const [payments, setPayments] = useState([])
  const [memberId, setMemberId] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await api.get('/payments')
        setPayments(response.data)
      } catch (error) {
        console.error('Error fetching payments:', error)
      }
    }
    fetchPayments()
  }, [])

  const handleAddPayment = async () => {
    try {
      const response = await api.post('/payments', { member_id: memberId, amount, date })
      setPayments([...payments, response.data])
      setMemberId('')
      setAmount('')
      setDate('')
    } catch (error) {
      console.error('Error adding payment:', error)
    }
  }

  return (
    <div>
      <h2>Payments</h2>
      <input type="text" placeholder="Member ID" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
      <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleAddPayment}>Add Payment</button>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>{payment.date}: {payment.member.name} paid {payment.amount}</li>
        ))}
      </ul>
    </div>
  )
}

export default PaymentManagement;
