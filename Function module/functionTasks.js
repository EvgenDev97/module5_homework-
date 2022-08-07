const prompt = require('prompt-sync')();

let evenArr =[];
let oddArr =[];
let nullArr =[];
function evenOrOdd(){
    let arr =Array.from({length: 40}, () => Math.floor(Math.random() * 40));
        for ( i =0; i < arr.length; ++i) { 
            if (i == 0 && typeof i === 'number' ){
                nullArr.push(i)
            } else if (i % 2 != 0 && typeof i === 'number' ){
                oddArr.push(i)
            } else if (i % 2 == 0 && typeof i === 'number' ){
                evenArr.push(i)
            } 
        }
    console.log(evenArr.length)
    console.log(oddArr.length)
    console.log(nullArr.length)
    }

evenOrOdd()