let myArray = [8, 5, 7, 1, 9, 3, 3, 5, 8];
let miVector = [1,2,3,4,5];
function repetidos(vector) {
    let newArray = [];
    let cont = 0;
    for (let i = 0; i < vector.length - 1; i++){
        for (let j = i + 1; j < vector.length; j++){
            if (vector[i] == vector[j]) {
                cont++;
                newArray.push(vector[i]);
            }
        }
    }
    if (cont >= 1){
        return "Hay repetidos: " + cont + " son:" + newArray;
    } else{
        return "No hay repetidos";
    }
    }
    console.log(repetidos(myArray));
    console.log(repetidos(miVector));