function balancingParentheses(string) {
  const hash = {"(": 0, ")": 0};
  let additional = 0;
  if (string[0] === ")")  {
    additional += 1;
    string = "(" + string;
  }
  if (string[string.length-1] === "(") {
    additional += 1;
    string = string + ")";
  }

  for (const par of string) {
    hash[par] += 1;
  }
  return Math.abs(hash["("] - hash[")"]) + additional;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
