const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a ,b) => a - b
const div = (a, b) => a / b

const makeAdder = (constantValue) => {
  return (value) => constantValue + value
}

const add10 = (value) => value + 10

const mult5 = value => value * 5

const add = x => y => x + y

const mult5AfterAdd10Compose = (f, g) => x => f(g(x))
const mult5AfterAdd10 = mult5AfterAdd10Compose(mult5, add(10))

export { 
  sum,
  mul,
  sub,
  div,
  makeAdder,
  add10,
  mult5,
  add,
  mult5AfterAdd10
}