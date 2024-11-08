import React from "react";

interface SearchIconProps {
    size: number,
    color: string
}

export const SearchIcon: React.FC<SearchIconProps> = ({ size, color }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 10.5C29.9035 10.5 35.5 16.0964 35.5 23M37.147 37.1372L48 48M43 23C43 34.0458 34.0458 43 23 43C11.9543 43 3 34.0458 3 23C3 11.9543 11.9543 3 23 3C34.0458 3 43 11.9543 43 23Z" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
