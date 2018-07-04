// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
//
// Example
//
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;
//
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//
// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.
//
// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer sequence
//
// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.
//
// [output] boolean
//
// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

// sequence: [1, 3, 2, 1]
// sequence: [1, 3, 2]
// sequence: [1, 2, 1, 2]
// sequence: [1, 4, 10, 4, 2]


function almostIncreasingSequence (arr) {
  // Create counter variable
  let count = 0

  // Create a variable to hold the boolean value of more than one
  let justOne = true

  // Iterate over the array
  for( let i = 0; arr.length > i; i++) {

    // If the next number is not equal to the current number plus one and the number it in the array is equal to the current number plus 1
    if (arr[i + 1] != arr[i] + 1 && arr[i + 2] == arr[i] + 1) {
      // Increment the counter
      count++

    }
  }

  // If the count is greater than one
  if ( count > 1) {

    // justOne is false
    return justOne = false
  }
  console.log(justOne)
  // // return the value of justOne
  // return justOne
}


almostIncreasingSequence([1, 4, 10, 4, 2])
