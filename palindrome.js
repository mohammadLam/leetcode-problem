function isPalindrome(v = 121) {
  let value = v.toString()
  let reverseValue = ""
  for (let i = value.length - 1; i >= 0; i--) {
    reverseValue += value[i]
  }

  return reverseValue === value
}

console.log(isPalindromeNumber(-121))
