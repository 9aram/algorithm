const input = require("fs")
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .split(/\s+/); //일단 줄대로 끊는다
let N = Number(input[0]);

const dp = new Array(N+1).fill(0);
//dp[i]란? i를 1로 만드는 최연소 연산횟스
for(let i=2; i<=N ; i++){
  dp[i] = dp[i-1]+1; // dp[2]는 dp[1]에서 1만 더해주면 된다.!
  if(i%2 === 0){
    dp[i] = Math.min(dp[i], dp[i/2] +1);
  }
    if(i%3===0){
    dp[i]= Math.min(dp[i],dp[i/3]+1);
  }
}
console.log(dp[N]);