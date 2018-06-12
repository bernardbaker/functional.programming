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

const curry = a => b => c => d => a + b + c + d

const deepFreeze = (object) => {

  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  
  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? 
      deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

export {
  map,
  filter,
  reduce,
  curry,
  deepFreeze
}