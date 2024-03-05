// Object literals

let mySym = Symbol("key1")

const user = {
    name: "Afridi",
    age: 21,
    location: "Kharar",
    [mySym] : "myKey1"
}

// console.log(user.name);
// console.log(user["name"]);

console.log(user[mySym]);
console.log(typeof user[mySym]);

