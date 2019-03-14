//Basic Algorithm Scripting: Mutations

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/


function mutation(arr) {
  
    var str = arr[0].toLowerCase();
    var two = arr[1].toLowerCase();
    
     
    for(var counter = 0; counter < two.length; counter ++){
    
      //if not all the letters from 2nd  exist in 1st (non existence : index = -1)
      if(str.indexOf(two[counter]) === -1){
    
           return false
      }
    }
    
     return true
    }
    
    
    
    mutation(["voodoo", "no"]);