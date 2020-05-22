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

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(heights) {
        let polygon_perimeter = 0;
        for (let index in heights) {
            polygon_perimeter += heights[index];
        }

        this.my_perimeter = polygon_perimeter;
    }

    perimeter() {
        return this.my_perimeter;
    }

}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());