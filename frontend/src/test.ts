export {};

let date = new Date();

console.log(date.toUTCString());
console.log(new Date(date.toUTCString()));
