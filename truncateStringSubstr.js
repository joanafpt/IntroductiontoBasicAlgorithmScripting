//Basic Algorithm Scripting: Truncate a String

/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */


function truncateString(str, num) {
  
	var newStr = "";

	if(str.length === num){

	return str;

    }

  if (num > str.length){
    return str;
  }

 	if(str.length > num){

	newStr = str.substr(0, num)

  console.log(newStr + '...')
	return  newStr + '...';

   }
}

truncateString("Hello, darkness my old friend", 16); 