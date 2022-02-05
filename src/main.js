// Setup
function phoneticLookup(val) {
  let result = "";

  const d = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }

  result = d[val]

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");