const nums: number[] = [2, 7, 11, 15];
const target: number = 26;

export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(num, i);
  }

  throw new Error("No two sum solution");
};
