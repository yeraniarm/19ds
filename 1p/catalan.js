//Fórmula -> 2n! / (n+1)!*n!

let number=parseInt(prompt('¿Qué número catalnán desea obtener?',0));

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 


function numCatalan(n){
    let num = factorial(2*n);
    let num2 = factorial(n+1);
    let num3 = factorial(n);
    let op; 
    op = num / (num2*num3);
    return op;
}

console.log(numCatalan(number));