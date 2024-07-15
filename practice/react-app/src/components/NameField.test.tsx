import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { NameField } from './NameField';

describe('NameField test component', () => {
  test('renders NameField component', async () => {
    // ARRANGE
    const name = '';
    const setName = vi.fn();
    render(<NameField name={name} setName={setName} />);

    // ASSERT
    expect(screen.getByDisplayValue(name)).toBeInTheDocument();
  });

  test('calls setName on input change', async () => {
    // ARRANGE
    const name = '';
    const setName = vi.fn();
    render(<NameField name={name} setName={setName} />);

    // ACT
    fireEvent.change(screen.getByDisplayValue(name), {
      target: { value: 'Jane Doe' },
    });

    // ASSERT
    expect(setName).toHaveBeenCalledWith('Jane Doe');
  });
});
