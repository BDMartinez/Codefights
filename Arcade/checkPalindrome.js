// // Declare a function that checks if an input string is a palindrome
function checkPalindrome(inputString) {
  return inputString == inputString.split('').reverse().join('')
}

// // The long way
// function checkPalindrome(inputString) {
//     console.log(inputString)
//     // Split the input string and store it in a variable
//     let inputStringArray = inputString.split("");
//     console.log(inputStringArray)
//
//     // Create an empty array to hold the characters in reverse
//     let reverseArray = []
//     // Push the characters in the array into an empty array
//     for (let i = inputStringArray.length - 1; i >= 0; i--) {
//       reverseArray.push(inputStringArray[i])
//     }
//     console.log(reverseArray)
//
//     // Convert the new reversed array into a string and store it in a variable
//     let reversedInputString = reverseArray.join("")
//     console.log(reversedInputString)
//
//     // Compare the inputString to the reversedInputString
//     if (inputString === reversedInputString) {
//       return true
//     } else {
//       return false
//     }
// }


checkPalindrome("racecar")
checkPalindrome("blurg")
