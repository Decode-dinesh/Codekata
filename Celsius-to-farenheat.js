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
    let celcius = parseInt(userInput[0]);
    let convert = (celcius * 9/5) +32;
    let fahrenheit = convert.toFixed(2);
  console.log(fahrenheit);

  //end-here
});
