import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, ...buttonProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...buttonProps}>
    {children}
  </button>
);

export default CustomButton;
