import React from 'react';

const InputField = (props) => {
  const { type, id, onClick, className, labelValue, htmlFor, checked } = props;
  return (
    <>
      <input
        onClick={onClick}
        type={type}
        id={id}
        checked={checked}
      />
      <label htmlFor={htmlFor} className={className}>{labelValue}</label>
    </>
  )
}

export default InputField;
