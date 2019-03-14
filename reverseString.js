//Basic Algorithm Scripting: Reverse a String

/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function reverseString(str) {

    var arr = str.split('');
  
     var reversed = arr.reverse();
     console.log(reversed) //array is backwards
     console.log(typeof reversed); //typeof reversed is object /array
  
    //converts arr into string
     
    var res = reversed.join('');
    console.log(res);
    return res;
   
  
  }
  reverseString("hello");
  