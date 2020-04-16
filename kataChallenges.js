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