function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp))
    return obj[checkProp]
  // Only change code below this line
  return "Not Found"
  // Only change code above this line
}