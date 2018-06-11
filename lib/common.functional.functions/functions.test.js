import { 
  map,
  filter,
  reduce
} from './functions'

import {
  sum
} from '../math/math'


test('Map function called with multiply 10 to each array element', () => {
  const values = [10, 20, 30, 40]
  const array = [1,2,3,4]
  const newValues = map(value => value * 10, array)
  expect(newValues).toEqual(values)
})

test('Filter function will return odd numbers from input given', () => {
  const values = [1,3,5]
  const array = [1,2,3,4,5]
  const isOdd = x => x % 2 !== 0
  const newValues = filter(isOdd, array)
  expect(newValues).toEqual(values)
})

test('Reduce function used to sum a set of numbers', () => {
  const values = [1,2,3,4,5]
  const sumOfValues = reduce(sum, 0, values)
  expect(sumOfValues).toBe(15)
})