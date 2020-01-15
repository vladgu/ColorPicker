import React from 'react'
import { useState, useEffect } from 'react'

import ColorListItem from './ColorListItem'
import ColorRangePicker from './ColorRangePicker'
import colors from '../configs/colorList'

const ColorPicker = () => {
  const [value, onChange] = useState(colors[0].code)
  const [rgbDropdownOpened, onRGBDropdownOpen] = useState(false)
  const [dropdownOpened, onDropdownOpen] = useState(false)

  useEffect(() => {
    console.log(value, dropdownOpened, rgbDropdownOpened)
  })

  return (
    <div
      className='app'
      onClick={() => {
        onRGBDropdownOpen(false)
        onDropdownOpen(false)
      }}>
      <div className='color-picker'>
        <input type='text' className='color-input' value={value} onChange={e => onChange(e.target.value)} />
        <div className='box'>
          <div
            className={rgbDropdownOpened ? 'color-preview-box opened' : 'color-preview-box'}
            style={{ backgroundColor: value }}
            onClick={e => {
              e.stopPropagation()
              onRGBDropdownOpen(!rgbDropdownOpened)
              onDropdownOpen(false)
            }}
          />
          {rgbDropdownOpened ? (
            <div className='arrow-dropdown rgb'>
              <div className='arrow-up rgb'></div>
              <ColorRangePicker currentColor={value} />
            </div>
          ) : null}
        </div>
        <div className='box'>
          <i
            className={dropdownOpened ? 'arrow-down opened' : 'arrow-down'}
            onClick={e => {
              e.stopPropagation()
              onDropdownOpen(!dropdownOpened)
              onRGBDropdownOpen(false)
            }}
          />
          {dropdownOpened ? (
            <div className='arrow-dropdown'>
              <div className='arrow-up'></div>
              {colors.map((obj, index) => (
                <ColorListItem
                  key={String(index)}
                  currentColor={value}
                  colorName={obj.name}
                  colorCode={obj.code}
                  clickHandler={onChange}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
