import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("should return the correct indices for a valid pair", () => {
    const nums = [2, 7, 11, 15];
    const target = 26;
    const result = twoSum(nums, target);
    expect(result).toEqual([2, 3]);
  });

  it("should throw an error if no solution exists", () => {
    const nums = [1, 2, 3];
    const target = 10;
    expect(() => twoSum(nums, target)).toThrowError("No two sum solution");
  });
});
