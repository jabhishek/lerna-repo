import {Input} from '@avj/input';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
    .add('with text', () => (
        <Input value="Test" onChange={() => {}}/>
));
