import React from 'react';
import { Button } from '@design/core';

export const Primary = ({ label }) => <Button value={label} />;

Primary.parameters = {
  jest: ['../../tests/src/Button/Button.test.js'],
};

export default {
  title: 'YourComponent',
  component: Button,
  args: {
    label: 'hello',
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
};
