//Basic Algorithm Scripting: Title Case a Sentence

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/

function titleCase(str) {

    //converts string into lowercase and splits the string into an array of strings
    str = str.toLowerCase().split(' ');
  
    //goes through the string length and uppercases the 0th character, and the slice extracts from index 1 to the end of the string
  
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
  
    //joins the elements into a single string
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");