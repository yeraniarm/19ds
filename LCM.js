function GCD(a,c){
    let resultado;
    while(a % c !== 0){
        resultado = a%c;
        a = c;
        c = resultado;
    }
    return c;
}
function LCM(a, c) {
    return (a / GCD(a, c)) * c;
}

console.log(LCM(12,8));