import { validPalindrome } from './validPalindrome';

describe('validPalindrome', () => {
  it('should return true for a classic palindrome with punctuation', () => {
    expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(validPalindrome('race a car')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(validPalindrome('')).toBe(true);
  });

  it('should return true for single-character strings', () => {
    expect(validPalindrome('a')).toBe(true);
    expect(validPalindrome('Z')).toBe(true);
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(validPalindrome('.,')).toBe(true);
    expect(validPalindrome('0P')).toBe(false);
  });
});
