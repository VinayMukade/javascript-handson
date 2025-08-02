// Functional Experssion

var square = function(num){
       
       return num * num;
}
console.log("========Square of Numbers========");
console.log("square of number 5 is:" + square(5));
console.log("square of number 6 is:" + square(6));
console.log("square of number 25 is:" + square(25));
console.log("square of number 100 is:" + square(100));
console.log("square of number 67 is:" + square(67.89));
console.log("square of number 59 is:" + square(59));


console.log("Type of function is:" + typeof square);

console.log("=====Area of rectangle plot length is 499 and width is 917========");

var area = function(){
  var length = 499;
  var width = 917;
console.log("Area of rectangle plot is:"+length * width);

}
area();

console.log("======Swapping of values=======");


var swapValues = function(a,b){
    console.log("Before Swapping: ",a,b);
    var temp = a;
       a =b;
       b= temp;
    console.log("After Swapping: ",a,b);
    
    
}
swapValues("Mahi","Raina");
swapValues(55,77);

var stringFun = function(){
        var str = "JS the most popular language of internet"
        console.log("Total characters in the string:" + str.length);
        console.log("Character at index 6:" + str.charAt(6));
        console.log("Character at index 11:" + str.charAt(11));
        console.log("Last Character:" + str.charAt(str.length-1));
        console.log("First Character:" + str.charAt(0));
        console.log("Third-Last Character:" + str.charAt(str.length-3));

        var splitWords = str.split(" ");
        var totalWords = splitWords.length;
        console.log("Total Number of words:" + totalWords);
        
        var squ = totalWords * totalWords;
        console.log("Square of words:"+ squ);
        
        
}
stringFun();