const map = (f, array) => {
  let newArray = []
  for(let i = 0; i < array.length; ++i) {
    newArray[i] = f(array[i])
  }
  return newArray
}

const filter = (predicate, array) => {
  let newArray = []
  for(let i = 0; i < array.length; ++i) {
    if(predicate(array[i])) {
      newArray[newArray.length] = array[i]
    }
  }
  return newArray
}

const reduce = (f, start, array) => {
  let acc = start
  for(let i = 0; i < array.length; ++i) {
    acc = f(array[i], acc)
  }
  return acc
}

export {
  map,
  filter,
  reduce
}