import { 
  sum,
  mul,
  sub,
  div,
  makeAdder,
  add10,
  mult5,
  mult5AfterAdd10
} from './math'

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

test("MakeAdder(10) + 20 = 30", () => {
  const add10 = makeAdder(10)
  expect(add10(20)).toBe(30)
})  

test("add10(10) = 20", () => {
  expect(add10(10)).toBe(20)
})

test("mult5(10) = 50", () => {
  expect(mult5(10)).toBe(50)
})

test("mult5AfterAdd10(0) = 50", () => {
  expect(mult5AfterAdd10(0)).toBe(50)
})