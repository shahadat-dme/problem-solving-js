let Multiplication = (x) => {
    for(let i = 1; i <= x; i++){
        for(let j = 1; j<= 10; j++){
            console.log(`${i} x ${j} = ${ i * j}`);
        }
    }
} 

Multiplication(3)