//Chunky Monkey

/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function chunkArrayInGroups(arr, size) {

  //declarar um array final p guardar o resultado
  var arrayFinale = [];

  //declarar um array tmp p ir fazendo cenas
  var temp = [];

  //enquanto o arr original n tiver sido inteiramente percorrido
  while(arr.length > 0){

    //cortar size elementos do arr a partir do indice 0 (como o splice corta o array original, o indice 0 vai sendo updated)

    temp = arr.splice(0, size);

    //fazer push dos arrays temporarios para o array final
    arrayFinale.push(temp);

    }
    //retornar o array final
    return arrayFinale
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);