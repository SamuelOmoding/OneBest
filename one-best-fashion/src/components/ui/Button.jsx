import React from 'react';

const Button = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`px-4 py-2 rounded bg-black text-white hover:bg-black focus:ring-1 focus:ring-gray-500 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;