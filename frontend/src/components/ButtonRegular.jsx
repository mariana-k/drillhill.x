import React from 'react';

const ButtonRegular = ({ className, onClick, icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

    return (
        <button
            type="button"
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`${className} text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
            onClick={onClick}
        >
            {icon} {text}
        </button>
    );
};

export default ButtonRegular;
