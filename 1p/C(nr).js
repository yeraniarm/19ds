//Combinaciones - fórmula
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

function combinacion(n,r){
    let resultado;
    resultado = permutacion(n,r)/factorial(r);
    return resultado;
}

console.log(combinacion(10,3));