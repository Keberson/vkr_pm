import React from "react";

interface DescIconProps {
    size: number,
    color: string
}

export const DescIcon: React.FC<DescIconProps> = ({ size, color }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};
