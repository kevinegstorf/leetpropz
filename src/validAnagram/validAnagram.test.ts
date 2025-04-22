import { validAnagram } from './validAnagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(validAnagram('listen', 'silent')).toBe(true);
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('aacc', 'ccaa')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(validAnagram('rat', 'car')).toBe(false);
    expect(validAnagram('aacc', 'ccac')).toBe(false);
  });

  it('should handle single-character strings', () => {
    expect(validAnagram('a', 'a')).toBe(true);
    expect(validAnagram('a', 'b')).toBe(false);
  });

  it('should return false if lengths differ', () => {
    expect(validAnagram('abc', 'ab')).toBe(false);
  });
});
