const N = Number(require("fs")
  .readFileSync(
    "/dev/stdin"
  ).toString().trim()); // -를 기준으로 끊는다

  if(N===1) { console.log(1); return; }
  if(N===2)  { console.log(2); return; }

  const dp = new Array(N+1); // N크기만큼 배열을 생성하는데 배열은 0번째부터 있으니 N+1크기로 생성.

  dp[1] = 1n;
  dp[2] = 2n;

  for(let i=3; i<=N; i++){
    // 점화식 적용: 앞의 두 단계의 합을 10007로 나눈 나머지
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007n;
  }

  console.log(dp[N].toString());