const input = require("fs")
.readFileSync(
"/dev/stdin"
) .toString().split("\n"); 

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let minSum = Infinity; //최대한 0에가까운 값을 찾아야하는데 처음에 비교할 대상이 피요하다. 만약 0으로 시작해버리면 어떤값을 가져와도 0보다 커서 0이 제일 작은값이 되기에.
let ansLeft = 0;
let ansRight = 0;

for(let i=0 ; i<n-1; i++){ //주인공이 될 용액을 정하기 때문에 -1
    let start = i + 1;
    let end = n - 1;

    // 2. 나머지 용액 중 합이 0에 가장 가까운 것을 이분 탐색 (O(log N))
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sum = arr[i] + arr[mid];

        // 0에 더 가까운 값을 찾았다면 정답 갱신
        if (Math.abs(sum) < minSum) {
            minSum = Math.abs(sum);
            ansLeft = arr[i];
            ansRight = arr[mid];
        }

        // 합이 0이면 더 볼 것도 없이 종료
        if (sum === 0) break;

        // 합이 0보다 작으면 더 큰 숫자 쪽으로, 크면 더 작은 숫자 쪽으로
        if (sum < 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    // 이미 최적의 해(0)를 찾았다면 바깥 루프도 탈출
    if (minSum === 0) break;
}
// 결과 출력
console.log(ansLeft + " " + ansRight);