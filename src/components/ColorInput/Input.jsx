import React from 'react'

const Input = ({ color, setColor }) => (
  <input type='text' className='color-input' value={color} onChange={e => setColor(e.target.value)} />
)

export default Input
