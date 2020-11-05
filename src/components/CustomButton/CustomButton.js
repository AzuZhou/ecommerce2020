import React from 'react';

const CustomButton = ({ children, ...buttonProps }) => (
  <button className='custom-button' {...buttonProps}>
    {children}
  </button>
);

export default CustomButton;
