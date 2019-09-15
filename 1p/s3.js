//Sin formula - resultado sumatoria

var n = 1;
var sum = 0;
var op = 0;

while(n < 11){
    op = Math.pow(n,2)
    sum = sum + op;
    ++n;
}
console.log(sum);

//Con formula - Forma cerrada
var n = 10;
var sum = 0;

sum = ((n*(n+1))/2);
console.log(sum);