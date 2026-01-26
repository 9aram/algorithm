const input = require("fs")
  .readFileSync(
    "dev/stdin",
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다


  const [N, M] = input[0].split(' ').map(Number); // N: 가로, M: 세로
  const field = [];
const queue = [];
let unripeTomato = 0;
  
// 1. 필드 구성 및 초기 익은 토마토 위치 큐에 삽입
for (let i = 1; i <= M; i++) {
  const row = input[i].split(" ").map(Number); //.split(" ")는 문자열을 **특정한 구분자(이 문제에서는 공백)**를 기준으로 나누어 **배열(Array)**로 만들어주는 아주 유용한 도구예요.
  field.push(row);
  for (let j = 0; j < N; j++) {
    if (row[j] === 1) { //익은 토마토
      queue.push([i - 1, j, 0]); // [행, 열, 경과일수]
    } else if (row[j] === 0) {
      unripeTomato++;
    }
  }
}
// 처음부터 다 익어있었다면 0 출력하고 종료
if (unripeTomato === 0) {
  console.log(0);
  process.exit();
}

// 3. BFS 탐색 (토마토 익히기 시작!)
const dm = [-1, 1, 0, 0]; // 상하
const dn = [0, 0, -1, 1]; // 좌우
let head = 0;
let maxDays = 0;

while (queue.length > head) {
  const [m, n, days] = queue[head++];
  maxDays = days;

  for (let i = 0; i < 4; i++) {
    const nm = m + dm[i];
    const nn = n + dn[i];

    // 상자 안이고, 안 익은 토마토(0)를 찾으면
    if (nm >= 0 && nm < M && nn >= 0 && nn < N && field[nm][nn] === 0) {
      field[nm][nn] = 1; // 익히고
      unripeTomato--;    // 안 익은 개수 줄이고
      queue.push([nm, nn, days + 1]); // 다음 날짜 대기열에 추가
    }
  }
}

// 4. 결과 발표
// 안 익은 게 남았으면 -1, 아니면 총 걸린 날짜 출력
console.log(unripeTomato === 0 ? maxDays : -1);