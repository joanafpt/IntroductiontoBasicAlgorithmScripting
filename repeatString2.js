//Basic Algorithm Scripting: Repeat a String Repeat a String

/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function repeatStringNumTimes(str, num) {

if (num <= 0){
	return " ";
}
   if (num === 1){
    return str;
  }
    if(num > 0){
    return str + repeatStringNumTimes(str, num -1);
  }
}
repeatStringNumTimes("hi ", 5);