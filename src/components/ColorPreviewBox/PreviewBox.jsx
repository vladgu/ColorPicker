import React from 'react'

const PreviewBox = ({ color, rgbDropdownOpenedProp, onRGBDropdownOpenProp, onDropdownOpenProp }) => {
  const onClickHandler = e => {
    e.stopPropagation()
    onRGBDropdownOpenProp(!rgbDropdownOpenedProp)
    onDropdownOpenProp(false)
  }

  return (
    <div className='box'>
      <div
        className={ rgbDropdownOpenedProp ? 'color-preview-box opened' : 'color-preview-box' }
        style={ { backgroundColor: color } }
        onClick={ e => onClickHandler(e) }
      />
    </div>
  )
}

export default PreviewBox
