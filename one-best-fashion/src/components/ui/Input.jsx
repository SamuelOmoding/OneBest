import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder = '',
    name,
    id,
    className = '',
    ...props
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={id}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
            {...props}
        />
    );
};

export default Input;