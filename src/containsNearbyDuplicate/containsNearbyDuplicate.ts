export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      const lastIndex = seen.get(nums[i])!;
      if (i - lastIndex <= k) {
        return true;
      }
    }
    seen.set(nums[i], i);
  }

  return false;
};
