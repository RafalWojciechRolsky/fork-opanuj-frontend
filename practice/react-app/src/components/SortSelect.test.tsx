import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import SortSelect from './SortSelect';

describe('SortSelect test component', () => {
  test('renders SortSelect component', async () => {
    // ARRANGE
    const mockSetSortOption = vi.fn();
    render(<SortSelect sortOption="name" setSortOption={mockSetSortOption} />);

    // ACT
    const selectElement = screen.getByRole('combobox');

    // ASSERT
    expect(selectElement).toBeInTheDocument();
  });

  test('calls setSortOption on change', async () => {
    // ARRANGE
    const mockSetSortOption = vi.fn();
    render(<SortSelect sortOption="name" setSortOption={mockSetSortOption} />);

    // ACT
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'created' },
    });

    // ASSERT
    expect(mockSetSortOption).toHaveBeenCalledWith('created');
  });
});
