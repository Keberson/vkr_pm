import React from "react";

interface ExpandIconProps {
    size: number
}

export const ExpandIcon: React.FC<ExpandIconProps> = ({ size }) => {
    return (
        <svg width={2 * size} height={size} viewBox="0 0 441 240" xmlns="http://www.w3.org/2000/svg">
            <path d="M430.58 57.024C443.6 44.0063 443.6 22.901 430.58 9.88333C417.563 -3.134 396.457 -3.134 383.44 9.88333L244.04 149.285C231.023 162.302 209.917 162.302 196.9 149.285L57.3773 9.763C44.36 -3.25433 23.2543 -3.25433 10.237 9.763C-2.78066 22.7807 -2.78066 43.886 10.237 56.9037L173.25 219.916C199.277 245.94 241.467 245.953 267.507 219.939L430.58 57.024Z" fill="white" />
        </svg>
    )
};
