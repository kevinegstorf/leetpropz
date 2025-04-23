# Contains Nearby Duplicate

## Description

Given an integer array `nums` and an integer `k`, return `true` if there are **two distinct indices** `i` and `j` in the array such that:

- `nums[i] === nums[j]`, and
- `abs(i - j) <= k`

Otherwise, return `false`.

### Example

```ts
Input: (nums = [1, 2, 3, 1]), (k = 3);
Output: true;

Input: (nums = [1, 0, 1, 1]), (k = 1);
Output: true;

Input: (nums = [1, 2, 3, 1, 2, 3]), (k = 2);
Output: false;
```
