import * as React from "react";

// Define the props interface for the CustomSelect component
interface CustomSelectProps {
    name: string; // Name attribute for the select element
    id: string; // ID attribute for the select element
    required: boolean; // Whether the select element is required
    options: { value: string; label: string }[]; // Array of options for the select element
    defaultOption: string; // Default option text
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Change event handler
    value: string; // Current value of the select element
    dataTestId: string; // Data test ID for testing purposes
}

// CustomSelect functional component
export function CustomSelect({name, id, required, options, defaultOption, onChange, value, dataTestId}: CustomSelectProps) {
    return (
        <select
            name={name}
            id={id}
            required={required}
            onChange={onChange}
            value={value}
            data-testid={dataTestId} // Attribute for testing
        >
            <option value="">{defaultOption}</option> {/* Default option */}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}