import * as React from 'react';
import {ChangeEvent} from "react";

interface InputProps<T extends string | number> {
    type?: string;
    value: T;
    onChange: (selectedValue: string) => void;
    id?: string;
    name?: string;
}

type FieldProps<T extends string | number> = InputProps<T> & {
    label: string;
}

export const Input = <T extends string | number>({ value, onChange, type = 'text' }: InputProps<T>): React.ReactElement => {
    return <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} type={type}/>;
};

export const InputField = <T extends string | number>({ label, name, ...props }: FieldProps<T>) => {
    return <div>
        <label htmlFor={name}>{label}</label>
        <Input {...props} />
    </div>
};
