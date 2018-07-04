// function shapeArea(n) {
//   let result = 1;
//   for (let i = 1; i < n; i++) {
//     result += 4 * i;
//   }
//   return result
// }

function shapeArea(n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2)
}

console.log(shapeArea(6));
