import React from 'react';
import { useState, useEffect } from 'react';

const ColorPicker = () => {
  const [value, onChange] = useState('#ffcc33');
  const [dropdownOpened, onDropdownOpen] = useState(false);

  useEffect(() => {
    console.log(value, dropdownOpened);
  });

  return (
    <div className='color-picker'>
      <input
        type='text'
        className='color-input'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className='box'>
        <div className='color-preview-box' style={{ backgroundColor: value }} />
      </div>
      <div className='box'>
        <i
          className={dropdownOpened ? 'arrow-down opened' : 'arrow-down'}
          onClick={() => onDropdownOpen(!dropdownOpened)}
        />
        {dropdownOpened ? (
          <div className='arrow-dropdown'>
            <div className='arrow-up'></div>
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ColorPicker;
