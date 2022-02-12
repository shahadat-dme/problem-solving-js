function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) {
        return num < 1;
        }
    return num > 1;
}
console.log(isPrime(6));
console.log(isPrime(7));

// for(var i = 2 ; i < 10; i++){
//     console.log(i);
// }