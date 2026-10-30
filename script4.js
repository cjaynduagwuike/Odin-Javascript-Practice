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
