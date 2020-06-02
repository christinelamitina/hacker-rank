function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

// Day 2 If Else
function getGrade(score) {
    let grade;
    if ((score >= 30) || (score > 25)) {
        grade = "A";
    }
    else if ((score >= 25) || (score > 20)) {
        grade = "B";
    }
    else if ((score >= 20) || (score > 15)) {
        grade = "C";
    }
    else if ((score >= 15) || (score > 10)) {
        grade = "D";
    }
    else if ((score >= 10) || (score > 5)) {
        grade = "E";
    }
    else {
        return grade = "F";
    }
    return grade;
}

// Day 1 Let and Const
function main () {
let r = readLine();
const PI = Math.PI;

// Print the area of the circle:
console.log(PI*r*r);
// Print the perimeter of the circle:
console.log(PI*2*r);
}

// Day 2 Switch Statements
function getLetter(s) {
    let letter;
    switch (true) {
        case 'aeiou'.includes(s[0]):
            return 'A';
        case 'bcdfg'.includes(s[0]):
            return 'B';
        case 'hjklm'.includes(s[0]):
            return 'C';
        case 'npqrstvwxyz'.includes(s[0]):
            return 'D';
        default: return undefined;
    }
}
// Day 2 Loops
function vowelsAndConsonants(s) {
    const vowel = ['a','e','i','o','u'];
    
    for(let i=0; i<s.length; i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i]== 'u'){
            console.log(s[i]);
        }
    }
    for(let i=0; i<s.length; i++){
        
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i]== 'u'){  
        }else{
            console.log(s[i]);
        }
    }
}
// Day 3 ARRAYS
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    return nums.sort((a, b) => {return b - a;}).filter(el => {return nums[0] !== el})[0];
}

// DAY 3
//  * Complete the isPositive function.
//  * If 'a' is positive, return "YES".
//  * If 'a' is 0, throw an Error with the message "Zero Error"
//  * If 'a' is negative, throw an Error with the message "Negative Error"
//  */
function isPositive(a) {
    if(a === 0){
        return "Zero Error"
    }
    if(a < 0){
        return "Negative Error"
    }
    else {
        return "YES"
    }
}

// Try, Catch & Finally
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}
