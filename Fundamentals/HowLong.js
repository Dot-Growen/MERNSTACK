Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.floor(Math.sqrt(this)); i++) {
            if (this % i === 0) {
                return false;
            }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e6) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 10,000th prime number is 104729
// This took 233.53190100193024 milliseconds to run

// The 100,000th prime number is 1299709
// This took 7573.9334000349045 milliseconds to run

// The 1,000,000th prime number is 15485863
// This took 252671.73710000515 milliseconds to run

//******************FIB */

// recursive => TAKES LONGER
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);


// iterative => SHORTER
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    console.log(vals)
    return vals[n];
}
iFib(20);

//*************************Str speed */

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// EXCUTION 1:

const reverse1 = () => story.split("").reverse().join("");
console.log(reverse1(story))

// This took 0.0103989839553833 milliseconds to run

// EXCUTION 2: FASTEST

const reverse2 = story => {
    var revstr = '';
    const length = story.length - 1;

    // Looping from the end 
    for (let i = length; i >= 0; i--) {
        revstr += story[i]
    }
    return revstr;
}
console.log(reverse2(story))

// This took 0.008800029754638672 milliseconds to run

// EXCUTION 3:

const reverse3 = story => {
    if (story === "") {
        return ""
    } else {
        return reverse3(story.substr(1)) + story.charAt(0)
    }

}
console.log(reverse3(story))




const { performance } = require('perf_hooks');
const start = performance.now();

console.log(`This took ${performance.now() - start} milliseconds to run`);