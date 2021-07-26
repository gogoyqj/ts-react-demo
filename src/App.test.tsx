import React from 'react';
import { render, screen } from '@testing-library/react';
import { RenderUser } from 'src/Cp';

test('renders learn react link', () => {
  render(<RenderUser username={'乾元亨利贞'} />);
  const linkElement = screen.getByText(/乾元亨利贞/i);
  expect(linkElement).toBeInTheDocument();
});

nidaye();

/**
 * @see './a.d.ts'
 */
function foo<T extends any>(arg: T) {
}