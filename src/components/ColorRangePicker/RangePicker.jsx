import React, { useState, useEffect } from 'react'

import RangePickerItem from './RangePickerItem'

const RangePicker = ({ currentColor, boxColorChange }) => {
  const [red, setRed] = useState(parseInt(currentColor.replace('#', '').substring(0, 2), 16))
  const [green, setGreen] = useState(parseInt(currentColor.replace('#', '').substring(2, 4), 16))
  const [blue, setBlue] = useState(parseInt(currentColor.replace('#', '').substring(4, 6), 16))

  useEffect(() => {
    const rgbToHex = rgb => {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      const hex = x => ('0' + parseInt(x).toString(16)).slice(-2)

      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
    }
    boxColorChange(rgbToHex(`rgb(${red},${green},${blue})`))
  })

  return (
    <>
      <RangePickerItem letter={'R'} color={red} setColor={setRed} />
      <RangePickerItem letter={'G'} color={green} setColor={setGreen} />
      <RangePickerItem letter={'B'} color={blue} setColor={setBlue} />
    </>
  )
}
export default RangePicker
