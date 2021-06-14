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
    let s = '';
    if(a===0){
        console.log("NULL");
    }else{
        for(let i=1; i<=a; i++){
            if(i<a){
                s +=9*i+" "
            }
            else{
                s +=9*i
                break;
            }
            
        }
        console.log(s);
    }
    
  
  //end-here
});
