//Basic Algorithm Scripting: Confirm the Ending

/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {

    //The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
    var res = str.substr(-target.length);
  
   //console.log(str.substr(-target.length));
  
    // target.length is negative so the substr() method starts counting from the end of the string
    var termination = str.substr(-target.length);
  
  //console.log(termination);
  
    if(termination !== target){
        return false;
    }
  
    else{
       return true;
    }
  
  }
  
  confirmEnding("Bastian", "n");
  