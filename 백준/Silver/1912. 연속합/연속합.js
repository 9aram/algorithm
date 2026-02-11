const input = require("fs").readFileSync("/dev/stdin").toString().split(/\n/); //일단 줄대로 끊는다
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

// dp 배열 생성
const dp = new Array(n).fill(0);

// 첫 번째 값으로 초기화
dp[0] = arr[0];
let answer = dp[0];

// dp 계산

for(let i=1; i<n ; i++){
    dp[i] = Math.max(dp[i-1]+arr[i],arr[i]);
    if(dp[i]>answer) answer = dp[i];
    //answer = Math.max(answer, dp[i]);
}
console.log(answer);