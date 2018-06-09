import { validateValueWithFunc, makeRegexParser } from './validate'

test('validate an incorrect SSN', () => {
  const regex = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/)
  expect(validateValueWithFunc('0123-45-6789', regex, 'SSN')).toBeFalsy()
})

test('validate a correct SSN', () => {
  const regex = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/)
  expect(validateValueWithFunc('123-45-6789', regex, 'SSN')).toBeTruthy()
})

test('validate an incorrect Phone number', () => {
  const regex = makeRegexParser(/^\(\d{3}\)-\d{2}-\d{4}$/)
  expect(validateValueWithFunc('(0123)-45-6789', regex, 'Phone')).toBeFalsy()
})

test('validate a correct Phone number', () => {
  const regex = makeRegexParser(/^\(\d{3}\)-\d{2}-\d{4}$/)
  expect(validateValueWithFunc('(123)-45-6789', regex, 'Phone')).toBeTruthy()
})