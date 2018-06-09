import { sum, mul, sub, div } from './math'

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2)
}) 

test("Multiplying 2 * 2 equals 4", () => {
  expect(mul(2, 2)).toBe(4)
}) 

test("Subtracting 10 - 8 equals 2", () => {
  expect(sub(10, 8)).toBe(2)
}) 

test("Dividing 4 / 2 equals 2", () => {
  expect(div(4, 2)).toBe(2)
}) 