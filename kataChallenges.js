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

  //case and switch
  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

  // Complete the solution so that it splits the string into pairs of two characters. 
  // If the string contains an odd number of characters then it should replace the missing
  // second character of the final pair with an underscore ('_').

  function solution(str) {
    if (str.length == 0) {
      return []
    };
    
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }

// Santa needs you to write two functions. Both of the functions accept a sequence of objects. 
// The first one returns a sequence containing only the names of the nice people, and the other 
// returns a sequence containing only the names of the naughty people. Return empty string if null.

  function getName(person) {
    return person.name;
  }
  
  function wasNice(person) {
    return person.wasNice;
  }
  
  function wasNaughty(person) {
    return !wasNice(person);
  }
  
  function getNiceNames(people){
    return people.filter(wasNice).map(getName);
  }
  
  function getNaughtyNames(people){
    return people.filter(wasNaughty).map(getName);
  }

