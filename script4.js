// ...Your code...

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}
console.log(camelize("background-color"));

function filterRange(array, a, b) {
  return array.filter((item) => item >= a && item <= b);
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 3);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

// New Question
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

// New Question
arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

// New Question
arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return array.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
