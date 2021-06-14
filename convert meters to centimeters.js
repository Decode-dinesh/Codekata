// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let A = userInput[0];
  let B = A * 1000;
  let C = A * 100000;

  console.log(B);
  console.log(C);

  //end-here
});
