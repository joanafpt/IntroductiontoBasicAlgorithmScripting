//Basic Algorithm Scripting: Finders Keepers

/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function findElement(arr, func) {
    let num = 0;
  
      for(var x = 0; x < arr.length; x ++){
  
        if(arr[x] % 2 === 0){
        //console.log(num);
            num = arr[x];
      return num;
      }
  
    }
  
  return
  
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);