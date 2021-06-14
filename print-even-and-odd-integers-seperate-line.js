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
  let a = userInput[0].split("").sort();
  let odd = [], even =[];
  for(let i=0; i<a.length; i++){  
    if(a[i]%2===0){
        odd.push(a[i]);
    }
  }
  
  for(let i=0; i<a.length; i++){
    if(a[i]%2!==0){  
        even.push(a[i]);  
    }
  }
  
// let odd_result  = odd.trim(); 
// let even_result = even.trim();
console.log(odd.join(' '));
console.log(even.join(' '));
  //end-here
});
