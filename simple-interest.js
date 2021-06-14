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
  let num = userInput[0].split(" "),P,T,R;
  P =parseFloat(num[0]);
  T =parseFloat(num[1]);
  R =parseFloat(num[2]);
  let si = parseFloat((P*T*R)/100);
  console.log(si.toFixed(2));

  //end-here
});
