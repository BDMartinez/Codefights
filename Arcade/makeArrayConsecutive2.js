function makeArrayConsecutive2 (...statues) {
  // Create a counter variable and set the initial value to zero
  let count = 0;

  // Then iterate over the statues array
  for (let i = 0; statues.length > i; i++) {
    // Define the expression to find the missing numbers/sizes and store it in it's own variable
    let missingNumber = statues[i - 1] + 1
    // Sort the the statues array, so that it can be operated on with the missing number expression without bad results
    statues.sort((a, b) => {
      return (a - b)
    })
    // If the current value of statues is greater than missingNumber
    if (statues[i] > missingNumber) {
      // Push the missingNumber to the statues array
      statues.push(missingNumber)
      // Then resort the statues array
      statues.sort((a, b) => {
        return (a - b)
      })
      // Increase the counter for each missing number pushed
      count++
    }
  }
  return count;
}

//** Solution utilizing Math max & min functions

// function makeArrayConsecutive2(...statues) {
//     var l = Math.min.apply(null, statues);
//     console.log(l)
//     var r = Math.max.apply(null, statues);
//     console.log(r)
//     console.log(statues.length)
//     return r - l - statues.length + 1;
// }


console.log(makeArrayConsecutive2(6, 3))
