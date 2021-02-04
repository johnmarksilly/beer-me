import { render, screen } from '@testing-library/react';
import TitledList from './TitledList';

test('Renders title and paragraph items', () => {
  render(<TitledList title='Test' items={['Sample']} />);
  const titleElement = screen.getByText(/Te/i);
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent('Test');

  const pElement = screen.getByText(/Sample/);
  expect(pElement).toBeInTheDocument();
});

test('TitledList has 3 elements', () => {
  render(<TitledList title='Sample' items={['Item 1', 'Item 2']} />);
  const titleListElement = screen.getByText(/Sample/i).parentElement;
  expect(titleListElement.childElementCount).toBe(3)
})