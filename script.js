// Function to add output to the page
function displayOutput(result) {
  const outputDiv = document.getElementById("output");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = result;
  outputDiv.appendChild(newParagraph);
}

/* Exercise 1: Filtering an Array
 Problem: Write a function that takes an array of numbers
 and returns a new array containing only the even numbers.*/

function FilteringArray(...arr) {
  return arr.filter((item) => item % 2 === 0);
}

// Call the function and display the result on the page
displayOutput(`Filtered Even Numbers: ${FilteringArray(4, 5, 6, 7, 8, 9)}`);

/* 
Exercise: 2 Find the Largest Number
Problem: Write a function that takes an array of numbers and
returns the largest number in the array.
*/

function FindLargestNumber(...arr) {
  return arr.sort((a, b) => b - a)[0]; //Math.max(...arr);
}

// Call the function and display the result on the page
displayOutput(
  `Largest Number: ${FindLargestNumber(105, 4, 111, 8, 9, 5, 6, 7, 1)}`
);

/* Exercise: 3 Reverse a String
Problem: Write a function that takes a string as input 
and returns the same string but reversed.
 */

function ReverseString(stringText) {
  return stringText.split("").reverse().join("");
}

// Call the function and display the result on the page
displayOutput(`Reversed String: ${ReverseString("Web Master ❤")}`);

/* Exercise: 4 Remove Duplicates
Problem: Write a function that takes an array of numbers
and returns a new array without duplicate numbers.
 */

function RemoveDuplicates(...arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Call the function and display the result on the page
displayOutput(
  `Array without Duplicates: ${RemoveDuplicates(
    105,
    5,
    4,
    111,
    8,
    1,
    9,
    5,
    111,
    6,
    7,
    1
  )}`
);
