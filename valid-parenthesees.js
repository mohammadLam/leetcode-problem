"use strict"
function isValid(string = "") {
  let allParentheses = "()[]{}"

  // check if string is format is wrong
  for (let i = 0; i < string.length; i++) {
    const stringValue = string[i]
    if (!includes(allParentheses, stringValue))
      throw Error("wrong value provided")
  }

  let prevParentheses = ""
  for (let i = 0; i < string.length; i++) {
    const currentParentheses = string[i]
    if (prevParentheses) {
      if (prevParentheses === "") {
      }
    }
  }
}

function includes(array, value) {
  let isIncluded = false
  if (typeof array === "string" && typeof value === "string" && value) {
    const specialCharacters = [
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "/",
      "\\",
      "?",
      ".",
      "$",
      "^",
    ]
    // modified value
    let modifiedValue = value
    // check value characters are special character or not
    for (let i = 0; i < value.length; i++) {
      const valueCharacter = value[i] // eg: (
      for (let j = 0; j < specialCharacters.length; j++) {
        const specialCharacter = specialCharacters[j]
        // if valueCharacter is equal to specialCharacter
        if (valueCharacter === specialCharacter) {
          modifiedValue = modifiedValue.replace(
            specialCharacter,
            `\\${specialCharacter}`
          )
        }
      }
    }
    // if special character
    let regex = new RegExp(`${modifiedValue}`, "g")
    return regex.test(array)
  } else if (typeof array === "object") {
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      if (
        typeof value === "object" &&
        typeof element === "object" &&
        value &&
        element
      ) {
        isIncluded = value.toString() === element.toString()
      }
      if (element === value) isIncluded = true
    }
    return isIncluded
  } else {
    return false
  }
}

isValid("(lam")
