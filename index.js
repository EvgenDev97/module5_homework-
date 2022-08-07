const prompt = require('prompt-sync')();

// first task
/*let text = prompt("Введите число или слово: ");
let type = +text;
const result = type % 2
if (Number.isNaN(result) == true){
    console.log("это не число")
}else{
    switch  (result){
        case 0:
             if (type % 2 == 0){
                console.log("Это число четное")
                break
             }
        case 1:
            if (type % 2 == 1){
                console.log('это число не четное')
                break
            }   
    }
}*/

/* second task
let x = Object

if (typeof x === "number"){
    console.log('x - число')
} else if (typeof x === "string"){
    console.log('x - строка')
} else if (typeof x === "boolean"){
    console.log('x - логический тип')
} else {
    console.log('x не определен')
}*/

//third task and fourth task

/*let str = 'Hello'
 //split creates an array from a string, revers and the join concatenates elements of array
console.log(str.split("").reverse().join(''))

function ran(min, max){
    let rando = Math.random() * (max - min) + min
    return rando
}
console.log(Math.floor(ran(1, 100)))*/

 //fifth task
/*let arr = ['a','b','c'];
let index;
for (index = 0; index < arr.length; ++index){
    console.log(arr[index]);
}
console.log(arr.length)

let arR = [1, 2, 3]
arR.forEach(entry => console.log(entry)) 

let aRr = ['alfa', 'betta', 'gamma'];
aRr.forEach(function(entry) {
    console.log(entry);   
})
console.log(aRr.length)*/

//sixth task

/*let arr = [1, 2, 3, 5, 1, 2 , "one", "two", true, true, 'one'];
let dubl =[];
let noDubl = new Set(arr)
const sortArr = [...arr].sort()
for (let i = 0; i < arr.length; i = i + 1  ){
    if (sortArr[i + 1] === sortArr[i]){
        dubl.push(sortArr[i])
    }    
}
console.log("Duplicates in an Array: ", dubl)
console.log('Array without Duplicates: ', noDubl)*/

// seventh task
/*
let arr = [1, 2 , 3, 4, 5, 6, 8, 10, 0, 0, null, Object, 'string'];
let evenArr =[];
let oddArr =[];
let nullArr =[]
for ( i =0; i < arr.length; ++i) { 
    if (i == 0 && typeof i === 'number' ){
        nullArr.push(i)
    } else if (i % 2 != 0 && typeof i === 'number'  ){
        oddArr.push(i)
    } else if (i % 2 == 0 && typeof i === 'number' ){
        evenArr.push(i)
    } 
}
console.log(evenArr.length)
console.log(oddArr.length)
console.log(nullArr.length)*/


// eighth task
/*
let nubmersMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])

for ( let elem of nubmersMap){
    console.log(elem)
}*/
