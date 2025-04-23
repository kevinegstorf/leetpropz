import { containsNearbyDuplicate } from './containsNearbyDuplicate';

describe('containsNearbyDuplicate', () => {
  it('should return true when duplicate is within range k', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  it('should return false when duplicate is outside range k', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it('should return false when there are no duplicates', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5], 3)).toBe(false);
  });

  it('should handle empty array', () => {
    expect(containsNearbyDuplicate([], 1)).toBe(false);
  });

  it('should handle k = 0', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 0)).toBe(false);
  });
});
