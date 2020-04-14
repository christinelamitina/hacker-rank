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

// Day 3