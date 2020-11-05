import React from 'react';

const FormInput = ({ handleChange, label, ...inputProps }) => (
  <div className='group'>
    {label ? (
      <label
        htmlFor={inputProps.name}
        className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
    <input className='form-input' onChange={handleChange} {...inputProps} />
  </div>
);

export default FormInput;
