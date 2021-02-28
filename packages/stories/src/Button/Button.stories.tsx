/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button } from '@design/core';

export const Primary = () => <Button />;
Primary.parameters = {
  jest: ['../../tests/src/Button/Button.test.js'],
};
export default {
  title: 'YourComponent',
  component: Button,
};
