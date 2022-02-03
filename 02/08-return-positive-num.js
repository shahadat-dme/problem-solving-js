let arr = [50, 67, 20, 84, 91, 40, 69,45,78,88];

const getPositiveNumber = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };
  console.log(getPositiveNumber(arr));
  