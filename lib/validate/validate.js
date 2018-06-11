const makeRegexParser = (regex) => regex.exec.bind(regex)

const validateValueWithFunc = (value, parseFunc, type) => {
  if(parseFunc(value)) {
    return true
  } else {
    return false
  }
}

export { validateValueWithFunc, makeRegexParser }