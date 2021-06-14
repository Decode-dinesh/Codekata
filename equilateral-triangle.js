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
  let a = parseFloat(userInput[0]);
  let b = Math.sqrt(3);
  let c = (1/4)*b*a*a;
  console.log(c.toFixed(2));

  //end-here
});
