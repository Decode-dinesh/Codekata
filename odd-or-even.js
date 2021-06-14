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
  let a = parseInt(userInput[0]);
  if(a===0){
      console.log('Zero');
  }
  if(a%2===0){
      console.log('Even');
  }
  if(a%2!==0){
      console.log('Odd');
  }
  //end-here
});
