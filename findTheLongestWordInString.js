//Basic Algorithm Scripting: Find the Longest Word in a String

/*Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */


function findLongestWordLength(str) {

    var arr = str.split(" "); //converts string into array
      var contentor = 0; // keeps track of the maximum length
     for (var counter = 0; counter < arr.length; counter++){
       if(arr[counter].length > contentor ){ //if the lenght of a given element is longer than the current max lenght
         contentor = arr[counter].length; // the greatest lenght is assigned to the variable
          }
      }
      console.log(contentor);
        return contentor; // return the variable
      
      
        }
  
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");