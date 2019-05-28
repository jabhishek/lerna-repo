import * as React from 'react';
interface InputProps<T extends string | number> {
    type?: string;
    value: T;
    onChange: (selectedValue: string) => void;
    id?: string;
    name?: string;
}
declare type FieldProps<T extends string | number> = InputProps<T> & {
    label: string;
};
export declare const Input: <T extends string | number>({ value, onChange, type }: InputProps<T>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export declare const InputField: <T extends string | number>({ label, name, ...props }: FieldProps<T>) => JSX.Element;
export {};
