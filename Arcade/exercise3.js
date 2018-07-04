function mult(...args) {
  let result = 0;
  // Then Multiply the contains of the argument array
  return args.reduce((accumulator, currentValue) => {
    return result = accumulator * currentValue
  })
  return result
}

console.log(mult(3,4,5))

console.log(mult(3,4,5,6))
