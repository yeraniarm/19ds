//Sin formula - resultado sumatoria

var n = 1;
const k = 3;
var sum = 0;

while(n <= 10){
     let j = Math.pow(n,k);
     sum = sum + j;
     ++n;
}
console.log(sum);

//Con formula - Forma cerrada
const k = 3;
var n = 10;
var sum = 0;

sum = (1/(k+1))*(Math.pow(n,k+1));
console.log(sum);

