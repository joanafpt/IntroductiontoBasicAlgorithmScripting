//Basic Algorithm Scripting: Where do I Belong

/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function getIndexToIns(arr, num) {
    var sortedArr = arr.sort(function (a, b) {  return a - b;  });
  
          if(sortedArr.length === 0){
             var arrAcresc = sortedArr.unshift(num)
            console.log(sortedArr);
            var indice = sortedArr.indexOf(num);
            console.log(indice);
            return indice;
           }
  
     for(let x = 0; x < sortedArr.length; x++){
  
      if(sortedArr[x]>= num){
            var c = sortedArr[x];
            var index = sortedArr.indexOf(c);
            return index; 
        }
          if(num > sortedArr[sortedArr.length -1]){
          var acrescentNum = sortedArr.push(num);
              var indie = sortedArr.indexOf(num);
          return indie;
          }
         }
  }
  getIndexToIns([], 100);