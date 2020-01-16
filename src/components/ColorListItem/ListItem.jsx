import React from 'react'

const ListItem = ({ colorName, colorCode, clickHandler, currentColor }) => (
  <div
    className={currentColor === colorCode ? 'color-list-item current' : 'color-list-item'}
    onClick={() => {
      clickHandler(colorCode)
    }}>
    <p className='color-list-paragraph'>{colorName}</p>
    <div className='color-preview-box' style={{ backgroundColor: colorCode }} />
  </div>
)

export default ListItem
