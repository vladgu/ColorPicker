import React from 'react'

const hexToRGB = (value, letter) => {
  let hex = value.replace('#', '')
  switch (letter) {
    case 'R':
      let r = parseInt(hex.substring(0, 2), 16)
      return r
    case 'G':
      let g = parseInt(hex.substring(2, 4), 16)
      return g
    case 'B':
      let b = parseInt(hex.substring(4, 6), 16)
      return b
    default:
      break
  }
}

const ColorRangePicker = ({ currentColor }) => (
  <div>
    <div
      className='color-range-picker-wrapper'
      onClick={e => {
        e.stopPropagation()
      }}>
      <p className='color-range-picker-paragraph'>R</p>
      <input
        type='range'
        min='0'
        max='255'
        step='1'
        className='color-range-picker'
        value={currentColor ? currentColor : '255'}
        onChange={() => console.log(1)}
      />
    </div>
    <div
      className='color-range-picker-wrapper'
      onClick={e => {
        e.stopPropagation()
      }}>
      <p className='color-range-picker-paragraph'>G</p>
      <input
        type='range'
        min='0'
        max='255'
        step='1'
        className='color-range-picker'
        value={currentColor ? currentColor : '255'}
        onChange={() => console.log(1)}
      />
    </div>
    <div
      className='color-range-picker-wrapper'
      onClick={e => {
        e.stopPropagation()
      }}>
      <p className='color-range-picker-paragraph'>B</p>
      <input
        type='range'
        min='0'
        max='255'
        step='1'
        className='color-range-picker'
        value={currentColor ? currentColor : '255'}
        onChange={() => console.log(1)}
      />
    </div>
  </div>
)

export default ColorRangePicker
