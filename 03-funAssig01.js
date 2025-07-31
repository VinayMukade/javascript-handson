function show(){
    console.log("===Function one===");
    
  console.log("Hello World");
    
}
function hello(){
    console.log("===Function two===");
    console.log("How are you doing");
    
}
show();
hello();

console.log("===Personal Details===");
firstName = "Vinay";
    lastName = "Mukade";
    collageName = "ADYPU";
function personalDetails(firstName,lastName,collageName){
    console.log("First Name:" + firstName);
    console.log("Last Name:" +lastName);
    console.log("Collagae Name:" +collageName);

}
personalDetails(firstName,lastName,collageName);


function addthreeValues(a, b, c) {
    let result = a + b + c;
    console.log("Result:", result);
}

// Invoking with numbers
addthreeValues(10.23, 600,40);   
 

// Invoking with strings
addthreeValues("Hello", "Good", "Morning"); 