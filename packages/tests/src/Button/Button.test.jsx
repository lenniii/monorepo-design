import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@design/core';

test('this should be working and pass', () => {
  render(<Button value="ciaone" />);
  expect(screen.queryByDisplayValue('ciaone')).toBeInTheDocument();
});
