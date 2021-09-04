/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...rest }):JSX.Element => (
    <input className={`p-3 px-6 rounded-3xl focus:outline-none shadow-md flex-grow min-w-7 ${className}`} {...rest} />
);

export default Input;