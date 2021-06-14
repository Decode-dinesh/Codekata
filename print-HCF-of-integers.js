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
  let result;
  let number = userInput[0].split(" ");
  let no1 = number[0];
  let no2 = number[1];
  for(i=1; i<= no1 && i<= no2; i++){
      if(no1%i===0 && no2%i===0){
          result = i;
      }
  }

  console.log(result);

  //end-here
});
