var longestCommonPrefix = function (strings = [""]) {
  if (strings.length > 200) throw Error("Strings should be less than 200")

  const firstElement = strings[0]
  let prefix = ""

  for (let char = 0; char < firstElement.length; char++) {
    for (let element = 1; element < strings.length; element++) {
      console.log(firstElement[char])
      if (strings[element].includes(firstElement[char])) {
        prefix += firstElement[char]
      }
      continue
    }
  }

  return prefix
}

console.log(longestCommonPrefix(["snow_flower", "chip_flight", "underflow"]))
