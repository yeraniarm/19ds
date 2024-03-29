class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    getValue(n = this.n) {
        function value(n){
            if(n < 2){
                return n;
            } else {
                return value(n-1) + value(n-2);
            }
        }
        return value(n);
    }
    getCost(n = this.n) {
        let cont = 0;
        function value(n){
            if(n < 2){
                cont++;
            } else {
                cont++;
                return value(n-1) + value(n-2);
            }
        }
        value(n);
        return cont;
    }
    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }
    getTable() {
        console.log("  n  - c - v ");
        for(let i = 0; i <= this.n; i++){
            console.log("f(" + i + ") - " + this.getCost(i) + " - " + this.getValue(i));
        }
    }
}

let ejemplo = new Fibonacci(5);
console.log(ejemplo.getValue());
console.log(ejemplo.getSucesion());
console.log(ejemplo.getCost());
console.log(ejemplo.getTable());

