import React from 'react'

const PreviewBox = ({ color, rgbDropdownOpenedProp, onRGBDropdownOpenProp, onDropdownOpenProp }) => (
  <div
    className={rgbDropdownOpenedProp ? 'color-preview-box opened' : 'color-preview-box'}
    style={{ backgroundColor: color }}
    onClick={e => {
      e.stopPropagation()
      onRGBDropdownOpenProp(!rgbDropdownOpenedProp)
      onDropdownOpenProp(false)
    }}
  />
)

export default PreviewBox
