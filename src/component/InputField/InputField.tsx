import React, {FC, ReactElement} from 'react';

interface props {
  type: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  className: string;
  labelValue?: string;
  htmlFor?: string;
  checked?: boolean;
}

const InputField: FC<props>  = (props): ReactElement => {
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
