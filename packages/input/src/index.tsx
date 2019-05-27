import * as React from 'react';
import {ChangeEvent} from "react";

interface Props<T extends string | number> {
    type?: string;
    value: T;
    onChange: (selectedValue: string) => void;
}

export const Input = <T extends string | number>({ value, onChange, type = 'text' }: Props<T>): React.ReactElement => {
    return <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} type={type}/>;
};
