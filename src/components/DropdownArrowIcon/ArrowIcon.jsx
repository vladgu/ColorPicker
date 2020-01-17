import React from 'react'

const ArrowIcon = ({ dropdownOpenedProp, onDropdownOpenProp, onRGBDropdownOpenProp }) => {
  const onClickHandler = e => {
    e.stopPropagation()
    onDropdownOpenProp(!dropdownOpenedProp)
    onRGBDropdownOpenProp(false)
  }

  return (
    <div className='box'>
      <i
        className={ dropdownOpenedProp ? 'arrow-down opened' : 'arrow-down' }
        onClick={ e => onClickHandler(e) }
      />
    </div>
  )
}

export default ArrowIcon
