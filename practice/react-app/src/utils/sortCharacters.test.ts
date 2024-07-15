import { describe, expect, test } from 'vitest';
import { Character } from '../types/Character';
import { sortCharacters } from './sortCharacters';

describe('sortCharacters test function', () => {
  test('sorts characters by name', async () => {
    // ARRANGE
    const characters: Character[] = [
      { name: 'Zelda', id: 1, gender: 'female', image: '', created: '' },
      { name: 'Link', id: 2, gender: 'male', image: '', created: '' },
      { name: 'Ganon', id: 3, gender: 'male', image: '', created: '' },
    ];
    const expected = [
      { name: 'Ganon', id: 3, gender: 'male', image: '', created: '' },
      { name: 'Link', id: 2, gender: 'male', image: '', created: '' },
      { name: 'Zelda', id: 1, gender: 'female', image: '', created: '' },
    ];

    // ACT
    const sortedCharacters = sortCharacters(characters, 'name');

    // ASSERT
    expect(sortedCharacters).toEqual(expected);
  });
});
