//Basic Algorithm Scripting: Chunky Monkey

/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function chunkArrayInGroups(arr, size) {
    var arrTemporario = [];
    var arrFinalista = [];
   
    for(var i = 0; i < arr.length; i=i+size){
   
    arrTemporario = arr.slice(i, i+size);
    arrFinalista.push(arrTemporario);
    }
    return arrFinalista;
   }
   
   chunkArrayInGroups(["a", "b", "c", "d", "x", "f", "s"], 4);