let firstArray = [1,2,3,4,5];
let secArray = [5,2,1,7,3];

function isSorted(array){

    for (let i = 0; i < array.length - 1; i++){
        if(array[i]>=array[i+1]){
            return "No está ordenado";
        }
        else {
            return "Está ordenado";
        }
    }
}

console.log(isSorted(firstArray));
console.log(isSorted(secArray));