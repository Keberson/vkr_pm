import React from "react";

const Cross = ({
                  height = "24px",
                  width = "24px",
                  color = "black",
                  ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 21 21"
        width={width}
        height={height}
        {...props}
    >
        <g fill="none" fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
            <circle cx="8.5" cy="8.5" r="8"/>
            <g transform="matrix(0 1 -1 0 17 0)">
                <path d="m5.5 11.5 6-6"/><path d="m5.5 5.5 6 6"/>
            </g>
        </g>
    </svg>
);

export default Cross;