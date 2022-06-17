/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
class BilanganPrima {
    result = [];

    constructor(n) {
        this.n = n;
    }

    prima() {
        for (let i = 2; i < this.n; i++) {
            let flag = 0;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }

            if (i > 1 && flag == 0) {
                this.result.push(i);
            }
        }

        return this.result;
    }
}

const data = new BilanganPrima(100);
console.info(data.prima());

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

let primeCounter = 0;
let fiftiethPrime;


/// EDIT HERE
// while (....) {}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
// do { .... } while (....)