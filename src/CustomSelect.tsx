import * as React from "react";

interface CustomSelectProps {
    name: string;
    id: string;
    required: boolean;
    options: { value: string; label: string }[];
    defaultOption: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function CustomSelect({ name, id, required, options, defaultOption, onChange }: CustomSelectProps) {
    return (
        <select name={name} id={id} required={required} onChange={onChange}>
            <option value="">{defaultOption}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}