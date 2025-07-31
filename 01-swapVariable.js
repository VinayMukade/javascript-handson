var sweety = "Sweety";
var cutie = "Cutie";
console.log("======Before Swapping======");

console.log(`First name: ${sweety}, Second name: ${cutie}`);
var temp = sweety;
sweety = cutie;


console.log("======After Swapping======");
console.log(`First Name: ${sweety}`);

cutie = temp;
console.log(`Second Name; ${cutie}`);


console.log("===Swapping Three Variables===");

var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log(`num1: ${num1}, num2: ${num2},num3: ${num3}`);

console.log("====Values after swapping=====");
temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("num1 =", num1); 
console.log("num2 =", num2);  
console.log("num3 =", num3);






