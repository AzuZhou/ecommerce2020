import React from 'react';
import { CustomButtonContainer } from './styled';

const CustomButton = ({ children, ...buttonProps }) => (
  <CustomButtonContainer {...buttonProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
