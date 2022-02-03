let arr = [50, 67, 20, 84, 91, 40, 69];
const arrAverage = (arr) => {
    let arrTotal = 0;
    for (let i = 0; i < arr.length; i++) {
      arrTotal += arr[i];
    }
    return arrTotal / arr.length;
  };
console.log(arrAverage(arr));