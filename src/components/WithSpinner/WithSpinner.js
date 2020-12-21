import React from 'react';
import Spinner from 'components/Spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
