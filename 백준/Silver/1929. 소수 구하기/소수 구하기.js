const input = require("fs")
.readFileSync(
"dev/stdin"
) .toString().split(" "); // 띄어쓰기를 기준으로 m,n가져온다

const m = Number(input[0]);
const n = Number(input[1]);
let number = [];

const isPrime = Array(n+1).fill(true); //n까지의 수를 담을 배열 생성

isPrime[0] = false;
isPrime[1] = false; //0과 1은 소수가 아님



for (let i= 1; i*i<=n; i++){
  if(isPrime[i]){
    for(let j=i*i; j<=n; j+=i){ //제곱의 지점부터 청소하면되는데 이해안감
      isPrime[j] = false;
    }
  }
}

// 3. 결과 출력
let result = "";
for (let i = m; i <= n; i++) {
  if (isPrime[i]) {
    result += i + "\n"; // 하나씩 출력하면 느리므로 문자열에 모아서 출력
  }
}
console.log(result);
