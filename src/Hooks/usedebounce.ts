import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay?: number): T => {
    const [debouncedValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay || 500);

        return () => clearTimeout(timeOutId);
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
