//  Normal function

function add(a, b, c){
    return a+b+c;
}

console.log(add(2,25,9));


// Normal Curry function

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a+b+c;
//         };
//     };
// };

// console.log(add(2)(3)(5));

// Use case - Sending mail

// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending email to: ${to} about Subject: ${subject} The content: ${body}`);
//         };
//     };
// };



// ES6 format for currry function
const sendAutoEmail = (to) => (subject) => (body) =>
`Sending email to: ${to} about Subject: ${subject} The content: ${body}`



let step1 = sendAutoEmail("afridi78@gmail.com");
let step2 = step1("Update about your order.");
console.log(step2("Your order has arrived our store, will be deleivered tomorrow."));