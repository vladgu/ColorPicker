import React from 'react'

const ListItem = ({ colorName, colorCode, currentColor, stateColorChange, preStateColorChange }) => {
  const onClickHandler = () => {
    stateColorChange(colorCode)
    preStateColorChange(colorCode)
  }

  return (
    <div
      className={ currentColor === colorCode ? 'color-list-item current' : 'color-list-item' }
      onClick={ onClickHandler }>
      <p className='color-list-paragraph'>{ colorName }</p>
      <div className='color-preview-box' style={ { backgroundColor: colorCode } } />
    </div>
  )
}

export default ListItem
