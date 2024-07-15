import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Character } from '../types/Character';
import { CharacterList } from './CharacterList';

const characters: Character[] = [
  {
    id: 1,
    name: 'John Doe',
    image: 'http://example.com/john-doe.jpg',
    gender: 'male',
    created: '2023-10-01',
  },
  {
    id: 2,
    name: 'Jane Doe2',
    image: 'http://example.com/jane-doe2.jpg',
    gender: 'female',
    created: '2023-10-03',
  },
  {
    id: 3,
    name: 'Jane Doe3',
    image: 'http://example.com/jane-doe3.jpg',
    gender: 'female',
    created: '2023-10-04',
  },
];

describe('CharacterList', () => {
  test('load & render characters list V1', async () => {
    // ARRANGE
    render(<CharacterList characters={characters} />);

    // ACT & ASSERT
    characters.forEach((character) => {
      const nameElement = screen.getByText(character.name);
      const imageElement = screen.getByAltText(character.name);

      expect(nameElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', character.image);
    });
  });

  test('load & render characters list V2', async () => {
    // ARRANGE
    render(<CharacterList characters={characters} />);

    // ACT
    const listElement = screen.getByRole('list');
    const listitemsElements = screen.getAllByRole('listitem');

    // ASSERT
    expect(listElement).toBeInTheDocument();
    expect(listitemsElements.length).toBe(characters.length);
  });
});
