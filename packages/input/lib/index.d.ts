import * as React from 'react';
interface Props<T extends string | number> {
    type?: string;
    value: T;
    onChange: (selectedValue: string) => void;
}
export declare const Input: <T extends string | number>({ value, onChange, type }: Props<T>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export {};
