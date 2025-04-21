import { validAnagram } from './validAnagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
    expect(isAnagram('aacc', 'ccaa')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
    expect(isAnagram('aacc', 'ccac')).toBe(false);
  });

  it('should handle single-character strings', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'b')).toBe(false);
  });

  it('should return false if lengths differ', () => {
    expect(isAnagram('abc', 'ab')).toBe(false);
  });
});
