function GCD(a,c){
    let resultado;
    while(a % c !== 0){
        resultado = a%c;
        a = c;
        c = resultado;
    }
    return c;
}

console.log(GCD(20,10));
