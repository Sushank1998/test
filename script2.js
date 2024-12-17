console.log("memoization");

// const memoriesFunction = () => {
//     let cache = {};
//     return (value) => {
//         if(value in cache){
//             console.log("factching form cache");
//             return cache[value];
//         }else{
//             console.log("calculating value");
//             let result = value + 20;
//             cache[value] = result
//             return result;
//         }
//     }
// }
// const addition = memoriesFunction();
// console.log(addition(20));
// console.log(addition(20));


// function outerFunction(callback) {
//     let name = prompt("Please enter your name.");
//     callback(name);
// }

// function callbackFunction(name) {
//     console.log("Hello " + name);
//   }
//   outerFunction(callbackFunction);


let arr = [20,30,20,30,40,60]

// Dublicate Value Array
// let findDublicateArr = arr.filter((e,index,array) => array.indexOf(e) !== index);
// console.log("findDublicateArr===>", findDublicateArr)   

//Max and Min value 


// const numbers = [1, 5, 2, 8, 3];
// const max = numbers.reduce((pre, currentValue) => {
//   return currentValue > pre ? currentValue : pre;
// }, numbers[0]);
// console.log((max)); // Output: 8

// const min = numbers.reduce((pre, currentValue) => {
//     return currentValue < pre ? currentValue : pre;
//   }, numbers[0]);
//   console.log(min);

// let max =  (numbers) => {
//     fisrtMaxV = Math.max(...numbers);
//     index = numbers.indexOf(fisrtMaxV);
//     numbers.splice(index, 1);
//     secondMaxV = Math.max(...numbers);
//     return (secondMaxV)
// }
// console.log(max(numbers))

// let min =  (numbers) => {
//     fisrtMaxV = Math.min(...numbers);
//     index = numbers.indexOf(fisrtMaxV);
//     numbers.splice(index, 1);
//     secondMaxV = Math.min(...numbers);
//     return (secondMaxV)
// }
// console.log(min(numbers))

// let numb = [10,11,30,13]

// const numbers = parseInt(numb);

// function evenOrOdd(numbers) {
//     if(numbers % 2 == 0) {
//         return 'Even';
//     } else {
//         return 'Odd';
//     }
// }

// console.log(evenOrOdd(numbers));



let num = prompt('Enter a number');

const numbers = parseInt(num);

function fictorial (numbers) {
    let fact = 1;
    for (let i = 1; i <= numbers; i++) {
        fact *= i;
    }
    return fact;
}

console.log(fictorial(numbers));