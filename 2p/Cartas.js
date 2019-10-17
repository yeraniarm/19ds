class Cartas {
    //0 = clubs(trebol), 1= diamonds, 
    //2 = hearts, and 3 = spades(pica) 
    printCard(n) {
        let position = [];
        if (n <= 13) {
            position[0] = 0;
        } else if (n <= 26) {
            position[0] = 1;
        } else if (n <= 39) {
            position[0] = 2;
        } else {
            position[0] = 3;
        }

        switch (n % 13) {
            case 0:
                position[1] = 13;
                break;
            case 1:
                position[1] = 1;
                break;
            case 2:
                position[1] = 2;
                break;
            case 3:
                position[1] = 3;
                break;
            case 4:
                position[1] = 4;
                break;
            case 5:
                position[1] = 5;
                break;
            case 6:
                position[1] = 6;
                break;
            case 7:
                position[1] = 7;
                break;
            case 8:
                position[1] = 8;
                break;
            case 9:
                position[1] = 9;
                break;
            case 10:
                position[1] = 10;
                break;
            case 11:
                position[1] = 11;
                break;
            case 12:
                position[1] = 12;
                break;
        }
        return position;
    }
    printNumber(k, n) {
        if (n > 0 && n < 14) {
            let card = 0;
            switch (k) {
                case 0:
                    card = n;
                    break;
                case 1:
                    card = n + 13;
                    break;
                case 2:
                    card = n + 26;
                    break;
                case 3:
                    card = n + 39;
                    break;
                default:
                    card = "Error"
                    break;
            }
            return card;
        } else {
            return "Error";
        }

    }
    twoPairs() { //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!
        function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        }
        //4 ases y 4 reyes -> se multiplican resultados -> 6 * 6 = 36 combinaciones de ases y reyes 
        let cAsesReyes = (factorial(4) / (factorial(4 - 2) * factorial(2))) * (factorial(4) / (factorial(4 - 2) * factorial(2)));
        //Posición libre ocupada por una carta (sin contar A o K) de las 44 restantes
        cAsesReyes *= 44; //36 * 44 = 1584 parejas dobles de ases y reyes
        //Esta situación se puede repetir con dobles parejas de A y Q, A y J, etc...
        let doblesParejas = factorial(13) / (factorial(13 - 2) * factorial(2)); //C(13,2) = 78 posibles tipos de dobles parejas
        let combinaciones = cAsesReyes * doblesParejas; //Combinaciones posibles 
        //La posibilidad de doble pareja es: 
        //(Combinaciones posibles de doble pareja / Combinaciones de manos de póquer de 5 cartas) * 100
        let cManos5 = factorial(52) / (factorial(52 - 5) * factorial(5)); //C(52,5) -> 2 598 960
        let resultado = (combinaciones / cManos5) * 100; //*100 para obtener el porcentaje
        return resultado.toFixed(4) + "%";
    }
}

let card = new Cartas();
card.printNumber(2, 1);
card.printCard(27);
card.twoPairs();