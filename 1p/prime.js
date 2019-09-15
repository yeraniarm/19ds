let primo=parseInt(prompt('¿Qué número primo del 1 al 100 quieres obtener?',0));

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number !== 1;
}

function imprimePrimo(number){
  const a = 100;
  let numerosPrimos = [];
  let resultado;
  for(let i = 2; i < a; i++){
    if(isPrime(i)){
      numerosPrimos.push(i);
    }
  }
  resultado = numerosPrimos[number-1];
  return "El primo número " + number + " del 1 al 100 es:" + resultado;
}
console.log(imprimePrimo(primo));
