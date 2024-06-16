import React from "react";

interface HideIconProps {
    size: number
}

export const HideIcon: React.FC<HideIconProps> = ({ size }) => {
    return (
        <svg width={2 * size} height={size} viewBox="0 0 441 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2374 182.733C-2.7803 195.75 -2.7803 216.857 10.2374 229.873C23.2547 242.89 44.3604 242.89 57.3777 229.873L196.78 90.4732C209.797 77.4532 230.903 77.4532 243.92 90.4732L383.44 229.993C396.46 243.01 417.563 243.01 430.58 229.993C443.6 216.976 443.6 195.87 430.58 182.853L267.57 19.8399C241.543 -6.18346 199.35 -6.19679 173.31 19.8165L10.2374 182.733Z" fill="white"/>
        </svg>
    );
};
