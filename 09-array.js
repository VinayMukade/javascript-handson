let array = [11,22,33,44,55,66,77];
console.log(array);


let rollNumbers = [11, 22, 33, 44, 55, 66, 77];
console.log(rollNumbers);

console.log("======== Length Of the Array ===========");
console.log(`Length of array is: ${rollNumbers.length}`);

console.log("======== Accessing Array Elements using Index =============");
const elementAtIndex2 = rollNumbers[2];
console.log(elementAtIndex2);
console.log(`0th Index element is: ${rollNumbers[0]}`);
console.log(`Last Element of the array: ${rollNumbers[rollNumbers.length-1]}`);

console.log("======== Updating Array Elements using Index =============");
rollNumbers[3] = 99;


console.log("======== Traversing array element in reverse order =============");
// let array = [11, 22, 33, 44, 55, 44, 48];
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element); 
}


console.log("======== Adding or Inserting elements at the end of the array =============");
let arrayNumber = [2, 1, 4, 5, 9, 6];
console.log(`Before adding or inserting elements `);
console.log(arrayNumber);
console.log(`After adding or inserting elements `);
arrayNumber.push(44, 22, 22);
console.log(arrayNumber);

//slice method and splice method
console.log("======= splice() - To Insert the elements without deleting any existing elements =================");
let numberArrays = [2, 1, 4, 5, 9, 6];
const numberArray0 = numberArrays.splice(3, 0, 99, 77);
console.log("====== Original Array =========");
console.log(numberArrays);
console.log("======= Inserting an elements without replacing any existing any elements==========");
console.log(numberArray0);

console.log("======= splice() - To Insert the elements by deleting or replacing the elements =================");
let numberArrs = [2, 1, 4, 5, 9, 6];
const numberArray1 = numberArrs.splice(2, 3, 100, 200);
console.log("====== Original Array =========");
console.log(numberArrs);
console.log("======= Inserting an elements with replacing any existing any elements==========");
console.log(numberArray1);



let str = "Vinay";

for(i=1;i<=str.length-1,i--){
    console.log(str);
    
}