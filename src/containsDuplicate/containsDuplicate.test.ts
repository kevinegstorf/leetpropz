import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate', () => {
  it('should return true if duplicates are present', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('should return false if all elements are unique', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('should handle a large array with no duplicates', () => {
    const nums = Array.from({ length: 10000 }, (_, i) => i);
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('should handle a large array with one duplicate', () => {
    const nums = [...Array.from({ length: 9999 }, (_, i) => i), 42];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('should return false for a single-element array', () => {
    const nums = [1];
    expect(containsDuplicate(nums)).toBe(false);
  });
});
