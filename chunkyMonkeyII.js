function chunkArrayInGroups(arr, size) {
var temporario = [];
var final = [];

for(var i = 0; i < arr.length; i+=size){
    if(arr.length > size){
        temporario = arr.slice(i, i+size);
    }

    final.push(temporario)
        temporario = []

    } 

 return final;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);