# LeetCode Practicing Project

This project is a collection of solutions to various LeetCode problems. Each problem is implemented as a standalone function with an explanation and description. Every problem will have:

- A dedicated README file explaining the problem, constraints, and examples.
- Unit tests to ensure the correctness of the solution.

The goal of this project is to practice and improve algorithmic problem-solving skills.

---

## Current Problems

1. **Two Sum**
   - [Problem Description](./twoSum/README.md)
   - [Implementation](./twoSum/twoSum.ts)
   - [Unit Tests](./twoSum/twoSum.test.ts)

More problems will be added over time.

---

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd leetcode-shizz
   ```
2. Install dependencies:

```bash
npm install
```

3. To run the implementation of a specific problem,

- first build the project:

```
npm run build
```

- Then, execute the compiled JavaScript file. For example, to run the twoSum solution:

```
node dist/twoSum/twoSum.js
```

- You can also run tests for a specific problem by specifying the test file. For example:

```
npm test
```
