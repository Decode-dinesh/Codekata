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
  let a =parseInt(userInput[0]);
  let sum = 0;
  while(a){
      sum += a % 10;
       a = Math.floor(a/10);
  }

  console.log(sum);

  //end-here
});
