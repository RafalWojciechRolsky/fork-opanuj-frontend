import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SearchTitle from './SearchTitle';

describe('SearchTitle test component', () => {
  test('renders SearchTitle component', async () => {
    // ARRANGE
    const name = 'John Doe';
    render(<SearchTitle name={name} />);

    // ASSERT
    const nameFieldElement = screen.getByText(`Wyszukiwarka postaci ${name}`);
    expect(nameFieldElement).toBeInTheDocument();
  });
});
