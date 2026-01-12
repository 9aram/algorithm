const input = require("fs")
  .readFileSync(
    "dev/stdin"
  )
  .toString()
  .split(/\s+/);
const N = Number(input[0]);
const arr = [];//6

for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}
//여기까진 오케이

//남은카드의 수를 구해야한다.
let head=0;

while (arr.length-head>1){// push 해주니깐 arr사이즈가 커진다 
    head ++;//13579
    arr.push(arr[head])//12345624644
    head ++;//246810
}
    console.log(arr[head]);

