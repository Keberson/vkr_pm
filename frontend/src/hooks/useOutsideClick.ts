import {useEffect, useRef} from "react";

export const useOutsideClick = (dropdownOpened: boolean, callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dropdownOpened) {
            const handleClickOutside = (event: MouseEvent | TouchEvent) => {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    callback();
                }
            };

            document.addEventListener('mouseup', handleClickOutside);
            document.addEventListener('touchend', handleClickOutside);


            return () => {
                document.removeEventListener('mouseup', handleClickOutside);
                document.removeEventListener('touchend', handleClickOutside);
            };
        }
    }, [callback, dropdownOpened]);

    return ref;
};