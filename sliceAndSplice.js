//Basic Algorithm Scripting: Slice and Splice

/*You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */


function frankenSplice(arr1, arr2, n) {
  //The input arrays should remain the same after the function runs.

	var copyArr2 = arr2.slice(0, );//copies arr2
	console.log(copyArr2);

	var newArr = copyArr2.splice(n, 0, ...arr1); //inserts the contents of arr1 into copyArr2, from the nth index 
  
	console.log(copyArr2);
		
return copyArr2;  //returns copyArr2 modified 

  }


frankenSplice([1, 2, 3], [4, 5, 6], 1);


