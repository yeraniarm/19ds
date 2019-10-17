class Vector {
    constructor(a) {
        let array = new Array(a);
        for (let i = 0; i < a; i++) {
            array[i] = 0;
        }
        this.array = array;
    }
    getData() { //lo que se mandó al constructor
        return this.array;
    }
    sum(b) {
        let op = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] + b[i];
            }
            return op;
        } else {
            return "Error"
        }
    }
    subt(b) {
        let op = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] - b[i];
            }
            return op;
        } else {
            return "Error"
        }
    }
    mul(b) {
        let op = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                op[i] = this.array[i] * b[i];
            }
            return op;
        } else {
            return "Error"
        }
    }
}

let vect = new Vector(5); //[0,0,0,0,0]
console.log(vect.sum([1, 1, 1, 1, 1])); //[1, 1, 1, 1, 1]
console.log(vect.sum([1, 1, 1, 1, 1, 1])); //Error
console.log(vect.subt([2, 2, 2, 2, 2])); //[-2, -2, -2, -2, -2]
console.log(vect.mul([2, 2, 2, 2, 2])); //[0, 0, 0, 0, 0]
console.log(vect.getData());