//Basic Algorithm Scripting: Falsy Bouncer


/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function bouncer(arr) {
    var anotherArr = [];
   
    //goes through the original arr
     for(var x = 0; x < arr.length; x++){
   
     //if element has a truth value
       if(arr[x]){ 
     //put it into the new array, so the returned array only has true values
         anotherArr.push(arr[x]) 
         }
     }
     return anotherArr;
   }
   
   bouncer([7, "ate", "", false, 9]);