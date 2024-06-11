import React from "react";

interface FilterIconProps {
    size: number
}

export const FilterIcon: React.FC<FilterIconProps> = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 668 668" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.666748 100.667C0.666748 45.4384 45.4384 0.666748 100.667 0.666748H567.333C622.563 0.666748 667.333 45.4384 667.333 100.667V139.719C667.333 166.241 656.797 191.676 638.043 210.43L443.763 404.71C437.513 410.963 434 419.44 434 428.28V506.387C434 532.907 423.463 558.343 404.71 577.097L331.31 650.497C295.4 686.407 234 660.973 234 610.19V428.28C234 419.44 230.488 410.963 224.237 404.71L29.9561 210.43C11.2024 191.676 0.666748 166.241 0.666748 139.719V100.667Z" fill="white"/>
        </svg>
    )
};
