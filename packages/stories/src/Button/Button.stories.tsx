import React from 'react';
import { Button } from '@design/core';

export const Primary = ({ label }) => <Button value={label} />;

export default {
  title: 'YourComponent',
  component: Button,
  args: {
    label: 'prova123prova',
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
};
