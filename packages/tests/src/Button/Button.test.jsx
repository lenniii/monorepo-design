import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@design/core';

test('this should be working and pass', () => {
  render(<Button />);
  expect(screen.queryByText('ciaone')).toMatchSnapshot();
});

test('this should be working and fail', () => {
  render(<Button />);
  expect(false).toBeTruthy();
});
