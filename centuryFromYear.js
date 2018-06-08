// Create a function that returns the century of a the year it's provided
centuryFromYear = (year) => {
  // return the smallest integer greater than or equal to the year divided by 100
  return Math.ceil( year / 100)
}

centuryFromYear(1992)

/* **__Long Way Arounnd__** */

// // Create a function that returns the century of a the year it's provided
// function centuryFromYear(year) {
//   // Declare the variables
//   // Convert the year to a string
//   let yearStr = year.toString()
//
//   // Store the length of the Year
//   let yearLength = yearStr.length
//
//   // Split the year into individual characters
//   let yearArr = yearStr.split("")
//
//   // Check to see if the year contains 00
//   let centennialYear = yearStr.includes("00")
//
//   // Create a valuable to store the century
//   let century = parseInt(yearArr[0])
//
//
//   // If it ends in 00
//   if (yearLength === 3 && centennialYear == true) {
//
//     return century
//
//   } else if (yearLength === 4 && centennialYear == true && yearArr[3] == 0) {
//
//     century = parseInt(yearArr[0] + yearArr[1])
//
//     return century
//
//   } else if (yearLength === 4) {
//
//     century = parseInt(yearArr[0] + yearArr[1])
//     console.log(century)
//     return century + 1
//
//   } else if (yearLength === 3) {
//
//
//     return century + 1
//
//   } else {
//
//     return 1
//
//   }
// }
