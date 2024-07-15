import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Character } from '../types/Character';
import { CharacterCard } from './CharacterCard';

const character: Character = {
  id: 1,
  name: 'John Doe',
  image: 'http://example.com/john-doe.jpg',
  gender: 'male',
  created: '2023-10-01',
};

test('load & render character card', async () => {
  // ARRANGE
  render(<CharacterCard character={character} />);

  // ACT
  const nameElement = screen.getByText(character.name);
  const imageElement = screen.getByAltText(character.name);

  // ASSERT
  expect(nameElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', character.image);
});
