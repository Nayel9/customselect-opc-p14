import * as React from "react";

interface CustomSelectProps {
    name: string;
    id: string;
    required: boolean;
    options: { value: string; label: string }[];
    defaultOption: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

export function CustomSelect({name, id, required, options, defaultOption, onChange, value}: CustomSelectProps) {
    return (
        <select name={name} id={id} required={required} onChange={onChange} value={value}>
            <option value="">{defaultOption}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}