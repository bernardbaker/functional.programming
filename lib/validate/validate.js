const makeRegexParser = (regex) => regex.exec.bind(regex)

const validateValueWithFunc = (value, parseFunc, type) => {
  if(parseFunc(value)) {
    console.log('Valid ' + type)
    return true
  } else {
    console.log('Invalid ' + type)
    return false
  }
}

export { validateValueWithFunc, makeRegexParser }