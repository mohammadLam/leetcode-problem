// https://leetcode.com/problems/power-of-three/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const stringArray = s.split(" ")
  const patternArray = pattern.split("")
  if (stringArray.length !== patternArray.length) return false
  let patternMatch = true

  const array = []
  for (let i = 0; i < stringArray.length; i++) {
    array.push({ pattern: patternArray[i], string: stringArray[i] })
  }

  const result = array.every((element) => {
    if (element.string === array[0].string) {
      return true
    }
  })

  if (result && array.length > 0) return false

  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i]
    for (let j = i + 1; j < array.length; j++) {
      const currentElement = array[j]
      if (currentElement.pattern === firstElement.pattern) {
        patternMatch = currentElement.string === firstElement.string
        if (patternMatch === false) return false
      }
    }
  }

  return patternMatch
}
console.log(wordPattern("aa", "dog dog dog dog"))
