function chunkArrayInGroups(arr, size) {
  
  var arrayFin = [];
  var arrayTemp = [];

  do {
     arrayTemp = arr.splice(0, size);
     arrayFin.push(arrayTemp);
  }
  while(arr.length > 0)

 return arrayFin;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);