let arr = [50, 67, 20, 84, 91, 40, 69];

const findMaxNumber = function(arr){
    return Math.max(...arr);
} 
// const findMaxNumber = (arr) => Math.max(...arr);

console.log(findMaxNumber(arr));
