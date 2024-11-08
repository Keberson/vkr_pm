import React from "react";

interface PlusIconProps {
    size: number,
    color: string
}

export const PlusIcon: React.FC<PlusIconProps> = ({ size, color }) => {
    const style = color === "gray" ? "fill-gray" : "fill-white";

    return (
        <svg width={size} height={size} viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg" className={style}>
            <path fillRule="evenodd" clipRule="evenodd" d="M280 600C280 610.609 284.214 620.783 291.716 628.284C299.217 635.786 309.391 640 320 640C330.609 640 340.783 635.786 348.284 628.284C355.786 620.783 360 610.609 360 600V360H600C610.609 360 620.783 355.786 628.284 348.284C635.786 340.783 640 330.609 640 320C640 309.391 635.786 299.217 628.284 291.716C620.783 284.214 610.609 280 600 280H360V40C360 29.3913 355.786 19.2172 348.284 11.7157C340.783 4.21427 330.609 0 320 0C309.391 0 299.217 4.21427 291.716 11.7157C284.214 19.2172 280 29.3913 280 40V280H40C29.3913 280 19.2172 284.214 11.7157 291.716C4.21427 299.217 0 309.391 0 320C0 330.609 4.21427 340.783 11.7157 348.284C19.2172 355.786 29.3913 360 40 360H280V600Z" fill={color}/>
        </svg>
    );
};