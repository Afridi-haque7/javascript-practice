const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[7]);

// Array methods

myArr.push(6)
//console.log(myArr);

myArr.pop()

// Push to front
myArr.unshift(8)

// Pop from front
myArr.shift()
// console.log(myArr); 

// Check if any value exists or not
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));




// Slice, splice

// console.log("A: ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B : ", myArr);

const myn2 = myArr.splice(1, 3);

// console.log(myn2);
// console.log("C : ", myArr);

const rm = ["modric", "kroos", "jude", "fede"];
const fcb = ["pedri", "gavi", "lamine"];

// rm.push(fcb);
// console.log(rm);

// const newTeam = rm.concat(fcb);

// Spread in array
const newTeam = [...rm, ...fcb]
console.log(newTeam);