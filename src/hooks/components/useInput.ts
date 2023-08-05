import { ChangeEvent, useState, useCallback } from 'react'

interface IUseInput {
    defaultValue?: string;
}

export const useInput = ({defaultValue = ''}: IUseInput) => {
    const [value, setValue] = useState(defaultValue);

    /**
     * 
     * @param event Input events 
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return { value, onChange: handleChange };
}