//Sin formula - resultado sumatoria

var n = 1;
var sum = 0;

while(n < 11){
     sum = sum + (n*n); 
     ++n;
}
console.log(sum);

//Con formula - Forma cerrada
var n = 10;
var sum = 0;

sum = ((n*(n+1))*((2*n)+1))/6;
console.log(sum);

