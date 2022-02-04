const printMultiplicationTable = (n) => {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
  };
  printMultiplicationTable(10);
  