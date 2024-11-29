/*
  Array
    - simply a list of data
    - [] ~ array literal
    - is zero-based
    - is also an Object
    - usual methods used:
      - .length
        - can also be used with strings
          - number of characters in string
          - spaces are counted as characters

    - zero-based
      - for memory efficient
    - one-based
      - e.g. Fortran, R

  Literals:
    - " " String literals
    - [ ] Array literals
    - ` ` Template literals
    - { } Object literals
  
  Object
    - has property and attribute
    - e.g. "name": "Lorenz Jedd"
*/

let studentNumbers = ["2020-1923", "2020-1924", "2020-1925"];
console.log("studentNumbers:", studentNumbers);
console.log("studentNumbers length:", studentNumbers.length);

student = studentNumbers.length - 1;
console.log("student length (-1):", student);
studentNumbers.length--;
console.log("student length (decrementation):", studentNumbers);

console.log("");

let fullName = "Lorenz Jedd";
console.log("fullName length:", fullName.length);
console.log("fullName length (-1):", fullName.length - 1);
console.log("fullName length (decrementation):", fullName.length--);

console.log("");

let theBeatles = ["John", "Paul", "Ringo", "George"];
theBeatles.length++;
console.log("theBeatles:", theBeatles);
console.log("theBeatles[1]:", theBeatles[1]);

/*
  is Undefined because the memory allocation reads it as an empty value and is possible that you can put value on it.
*/
console.log("theBeatles[5]:", theBeatles[5]);

theBeatles[0] = "Jun";
console.log("NEW theBeatles[0]:", theBeatles[0]);

let lastElementIndex = theBeatles.length - 1;
console.log("lastElementIndex:", lastElementIndex);

console.log("");

// Adding items into the array
// Using indeces to add items into array
let newArr = [];
console.log("newArr[0]:", newArr[0]);

newArr[0] = "Cloud Strife";
console.log("NEW newArr:", newArr);
console.log("newArr[1]:", newArr[1]);

newArr[1] = "Tifa Lockhart";
console.log("NEW newArr:", newArr);

newArr[newArr.length] = "Barrett Wallace";
console.log("NEW newArr:", newArr);

console.log("");

// Loop
for (let index = 0; index < newArr.length; index++) {
  console.log(`index[${index}]: ${newArr[index]}`);
}
console.log("");

// Multi-dimenstional Array
// for Complext Data Structures
let chessBoard = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

console.log("chessBoard:", chessBoard);
console.log("chessBoard[1][4]:", chessBoard[1][4]);
console.log("Pawn move to:", chessBoard[1][5]);
