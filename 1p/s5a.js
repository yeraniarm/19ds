//Sin formula - resultado sumatoria

let n = 0;
let sum = 0;
let j = 0;
function elevacion(a){
     for(let i= 0; i<11;i++){
          j=Math.pow(a,i);
          sum = sum + j;
     }
     return sum;
}
elevacion(2);

//Con formula - Forma cerrada
let n = 10;
let a = 2;

let sum = ((Math.pow(a,(n+1)))-1);
console.log(sum);
