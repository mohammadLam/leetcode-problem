/**
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */

let functionCallCount = 0

var moveZeroes = function (numbers) {
  functionCallCount++
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    // console.log('element', element, 'index', i, numbers)
    if (element === 0) {
      numbers.splice(i, 1)
      // console.log('splice', numbers)
      numbers.push(0)
      // console.log('push', numbers)
    }   
    if (numbers[0] === 0 && functionCallCount < numbers.length) {
      moveZeroes(numbers)
    }
  }
  // console.log(numbers, "OT")
  // functionCallCount=0
}

let array = [0, 0]
moveZeroes(array)
console.log(array)
// moveZeroes([0, 1, 0, 3, 12])
// moveZeroes([0,0])
