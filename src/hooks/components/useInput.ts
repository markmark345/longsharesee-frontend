import { ChangeEvent, useState, useEffect } from 'react'

export const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return { value, onChange: handleChange };
}