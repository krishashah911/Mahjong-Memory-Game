import { compare } from ".";

it("compare function ", () => {
  let a = { score: 1 };
  let b = { score: 2 };
  const result = compare(a, b);
  expect(result).toBe(-1);
  a = { score: 2 };
  b = { score: 1 };
  const result2 = compare(a, b);
  expect(result2).toBe(1);
  a = { score: 1 };
  b = { score: 1 };
  const result3 = compare(a, b);
  expect(result3).toBe(0);
});
