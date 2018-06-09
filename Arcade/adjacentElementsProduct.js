function adjacentElementsProduct(inputArray) {
  // Iterate over the array
  const productArray = inputArray.map((n, i) => {
  // Multiply each element by it's adjacent element
  return inputArray[i] * inputArray[i + 1]
  })
  // Sort the productArray, also the final element in the array is some sort of artifact so... Destroy IT!!!!
  productArray.sort((a, b) => {
    return a - b;
  }).pop()
  // Return the final
  return productArray[productArray.length - 1]
}


console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]))
