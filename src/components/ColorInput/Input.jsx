import React from 'react'

const Input = ({ color, stateColorChange, preStateColorChange }) => {
  const onChangeHandler = e => {
    stateColorChange(e.target.value)
    preStateColorChange(e.target.value)
  }

  return (
    <input
      type='text'
      className='color-input'
      value={ color }
      onChange={ e => onChangeHandler(e) }
    />
  )
}

export default Input
