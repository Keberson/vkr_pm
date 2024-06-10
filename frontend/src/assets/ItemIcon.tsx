import React from "react";

interface ItemIconProps {
    size: number
}

export const ItemIcon: React.FC<ItemIconProps> = ({ size }) => {
    return (
        <svg width={size * 2} height={size} viewBox="0 0 481 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5999 135.2L225 236.8C234.6 241.6 246.6 241.6 256.2 236.8L471.4 135.2C484.2 128.8 484.2 112 471.4 105.6L256.2 3.9999C246.6 -0.800098 234.6 -0.800098 225 3.9999L10.5999 106.4C-3.0001 112 -3.0001 129.6 10.5999 135.2Z" fill="white"/>
        </svg>
    )
};
