// Using the .map() method, create a new array with numbers multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// function newArr(numbers){
//     return numbers*100
// }
// const solutionOne = numbers.map(newArr)
// console.log(solutionOne)
// const solutionTwo = numbers.map(function newArr(numbers) {
//   return numbers * 100;
// });
// console.log(solutionTwo)
const solutionThree = numbers.map(numbers => numbers *100)
console.log(solutionThree)