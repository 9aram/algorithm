const fs = require("fs");
const input = fs.readFileSync(
    "dev/stdin",
  ).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let i = N - 1;
while (i > 0 && arr[i - 1] >= arr[i]) {
  i--;
}

if (i === 0) {
  console.log(-1);
  return;
}

let j = N - 1;
while (arr[j] <= arr[i - 1]) {
  j--;
}

[arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

let left = i;
let right = N - 1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}

console.log(arr.join(" "));