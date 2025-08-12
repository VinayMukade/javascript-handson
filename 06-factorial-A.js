function factorialOfNum(num) {
    if (num === null || num === undefined) {
        return "Unhappy scenario " + num;
    }

    let fact = 1;
    for (let index = num; index >= 1; index--) {
        fact = fact * index;
    }
    return fact;
}

console.log("Factorial of 5 is: " + factorialOfNum(5));
console.log("Factorial of 3 is: " + factorialOfNum(3));
console.log("Factorial of null is :" + factorialOfNum(null));
console.log("Factorial of 8 is: " + factorialOfNum(8));
console.log("Factorial of undefined is :" + factorialOfNum(undefined));
console.log("Factorial of 9 is: " + factorialOfNum(9));
console.log("Factorial of 0 is :" + factorialOfNum(0));
