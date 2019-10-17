class Matriz {
    constructor(r, c) {
        this.r = r;
        this.c = c;
        let array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            array[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                array[i][j] = 0;
            }
        }
        this.array = array;
    }
    getMatrix(){
        return this.array;
    }
    initRandom() {
        this.array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            this.array[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                this.array[i][j] = Math.random();
            }
        }
        return this.array;
    }
    initIdentity(){
        let newArray = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            newArray[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                newArray[i][j] = 0;
            }
        }
        for(let i = 0; i < this.array.length; i++){
            newArray[i][i] = 1;
        }
        return newArray;
    }
    getRow(r) {
        return this.array[r - 1];
    }
    getCol(c) {
        let newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            newArray.push(this.array[i][c - 1]);
        }
        return newArray;
    }
    isSquared() {
        //r y c son iguales
        return this.r === this.c ? true : false;
    }
    isSymetric() {
        //Que sea cuadrada, posicion [1,0] sea igual a [0,1]
        //Es decir, que sea igual a su traspuesta
        let bandera = true;
        if (this.isSquared(this.array)) {
            for (let i = 0; i < this.array.length; i++) {
                for (let j = 0; j < this.array.length; j++) {
                    if (this.array[i][j] != this.array[j][i]) {
                        bandera = false;
                        i = this.array.length;
                        break;
                    }
                }
            }
        } else {
            bandera = false;
        }
        return bandera;
    }
    isIdentity() {
        //cuando la diagonal principal sea 1 y todo lo demas sea 0
        //debe ser cuadrada
        let bandera = true;
        if (this.isSquared(this.array)) {
            if(this.array == this.initIdentity()){
                bandera = true;
            } else {
                bandera = false;
            }
        } else {
            bandera = false;
        }
        return bandera;
    }
}

let matriz1 = new Matriz(5, 6);
console.log(matriz1.initRandom());
console.log(matriz1.getMatrix());
console.log(matriz1.isSquared());
console.log(matriz1.isSymetric());
console.log(matriz1.isIdentity());
console.log(matriz1.getRow(3));
console.log(matriz1.getCol(1));
let matriz2 = new Matriz(5, 5);
console.log(matriz2.isIdentity());
console.log(matriz2.isSquared());
console.log(matriz2.isSymetric());
let matriz3 = new Matriz(4,4);
console.log(matriz3.initRandom());
console.log(matriz3.isIdentity());
let matriz4 = new Matriz(5, 7);
console.log(matriz4.isIdentity());
console.log(matriz4.isSquared());
console.log(matriz4.isSymetric());
