//Basic Algorithm Scripting: Repeat a String Repeat a String

/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function repeatStringNumTimes(str, num) {
    // repeat after me
  
      var newStr = ""; //never forget
  
     if(num <= 0){
      return "";
    }
  
    while (num > 0){
     newStr += str;
       num --;
    }
  
    console.log(newStr);
    return newStr;
  }
  
  repeatStringNumTimes("abc ", 10);