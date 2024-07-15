import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import GenderSelect from './GenderSelect';

type GenderTitle = 'Male' | 'Female' | 'Genderless' | 'Unknown' | 'Any Gender';

const genderTitle: GenderTitle = 'Any Gender';
const setGender = vi.fn();

describe('GenderSelect test component', () => {
  test('renders GenderSelect component with any gender', async () => {
    // ARRANGE
    render(<GenderSelect gender={genderTitle} setGender={setGender} />);

    // ACT
    const genderElement = screen.getByDisplayValue(genderTitle);

    // ASSERT
    expect(genderElement).toBeInTheDocument();
  });

  test('calls setGender when a new gender is selected', async () => {
    // ARRANGE
    render(<GenderSelect gender={genderTitle} setGender={setGender} />);

    // ACT
    const newGender = 'female';
    const selectElement = screen.getByDisplayValue(genderTitle);
    fireEvent.change(selectElement, { target: { value: newGender } });

    // ASSERT
    expect(setGender).toHaveBeenCalledWith(newGender);
  });
});
