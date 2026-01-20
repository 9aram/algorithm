const input = require("fs")
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다


const N = Number(input[0]);
const number = input[1].split(" ").map(Number);

const prefixSum = new Array(N+1).fill(0);
for (let i=0; i<N; i++){
  prefixSum[i+1]=prefixSum[i]+number[i]; 
}

const M = Number(input[2]);
let result = "";

// 2. 뺄셈 한 번으로 구간 합 계산
for (let k = 3; k < M + 3; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  result += (prefixSum[j] - prefixSum[i - 1]) + "\n";
}

// 3. 한 번에 출력
console.log(result.trim());