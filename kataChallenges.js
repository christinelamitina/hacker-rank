// check if array of 'a' includes 'x'

function check(a, x) {
    return a.includes(x);
  }

//More than 3 characters but less than 20
//Must contain only alphanumeric characters.
//Must contain letters and numbers.

function validPass(password){
    return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
  }

  function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }