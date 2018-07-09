/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  let fibArr = [1, 2];

  for(let i = 2; i < maxFibValue; i++) {
    let newNum = fibArr[i-1] + fibArr[i-2]; // The newNum is always the sum of the previous two numbers
    fibArr.push(newNum);
  }
  
  for(let i = 0; fibArr[i] <= maxFibValue; i++) {
    if(fibArr[i]%2 === 0) {
      sum += fibArr[i]; //Adds fibArr index value to the sum during each iteration.
    }
  }

  console.log(sum);

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  let fibArr = [1, 2];

  for(let i = 2; i < maxFibValue; i++) {
    let newNum = fibArr[i-1] + fibArr[i-2]; // The newNum is always the sum of the previous two numbers
    fibArr.push(newNum);
  }

  //do your work here
  function stopAtMax(maxFibValue) {
    for(let i = fibArr.length - 1; i >= 0; i--) {
      if(fibArr[i] < maxFibValue) {
        let maxNum = fibArr[i];
        return maxNum;
      }
    }
  }

  highest = stopAtMax(maxFibValue);

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

//Fib sequence: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89