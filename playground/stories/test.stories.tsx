import {Input, InputField} from '@avj/input';
import * as React from 'react';
import { storiesOf } from '@storybook/react';

const InputTest = () => {
    const [value, setValue] = React.useState<string>('');
    return <InputField value={value} onChange={setValue} label="Enter User" name="user" type="text" id="username" />
}

storiesOf('Input', module)
    .add('with text', () => (
        <Input value="Test" onChange={() => {}}/>
));

storiesOf('InputField', module)
    .add('with text', () => (
        <InputTest />
));
