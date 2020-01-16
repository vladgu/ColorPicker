import React, { useState, useEffect } from 'react'

import colors from '../configs/colorList'
import ListItem from '../components/ColorListItem/ListItem'
import RangePicker from '../components/ColorRangePicker/RangePicker'
import PreviewBox from '../components/ColorPreviewBox/PreviewBox'

const ColorPicker = () => {
  const [value, onChange] = useState(colors[0].code)
  const [rgbDropdownOpened, onRGBDropdownOpen] = useState(false)
  const [dropdownOpened, onDropdownOpen] = useState(false)

  useEffect(() => {
    // console.log(value, dropdownOpened, rgbDropdownOpened)
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
          <PreviewBox
            color={value}
            rgbDropdownOpenedProp={rgbDropdownOpened}
            onRGBDropdownOpenProp={onRGBDropdownOpen}
            onDropdownOpenProp={onDropdownOpen}
          />
          {rgbDropdownOpened ? (
            <div className='arrow-dropdown rgb'>
              <div className='arrow-up rgb'></div>
              <RangePicker currentColor={value} boxColorChange={onChange} />
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
                <ListItem
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
