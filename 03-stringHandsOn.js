function stringHandsOn(){
    var str = "   Hey you are doing good, keep it up  "
    console.log("Given string:" + str);
    console.log("Length of string:" + str.length);
   
    var strFinal = str.trim();
    console.log(" leading and trailing extra spaces:" + strFinal);

    console.log(`First Character: ${strFinal.charAt(0)},Last Character:${strFinal.charAt(strFinal.length-1)}`);
   var strFinal= str.split(" ");
   console.log(`Total Number Of words: ${strFinal.length}`);

   console.log(str.indexOf("good"));
   
   
}
stringHandsOn();