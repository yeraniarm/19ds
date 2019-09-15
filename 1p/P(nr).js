//Permutaciones - fórmula
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function permutacion(n,r){  
    let resultado;
    let op1;
    let op2;
    op1 = factorial(n);
    op2 = factorial(n-r);
    resultado = op1/op2;
    return resultado;
}

console.log(permutacion(8,5));