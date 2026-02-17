const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, K, X] = input[0].split(" ").map(Number); //도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X

// 그래프
const graph = Array.from(Array(N+1), () => []); //graph = [ [], [], [], [] ]

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  graph[A].push(B); //graph[1] = [2, 3]; 1에서 얼만큼 갈수있는지 [3,4]
}

// 거리 배열 (-1 = 미방문)
const dist = new Array(N + 1).fill(-1); //dist[i] = 시작점 → i까지 거리

// BFS
const queue = []; //앞으로 탐색할 도시 줄 세우는 곳
let head = 0;

queue.push(X); //시작 도시부터 탐색 시작
dist[X] = 0; //시작점 → 시작점 거리 = 0

while (head < queue.length) {
  const cur = queue[head++]; //1

  for (const next of graph[cur]) {
    if (dist[next] === -1) {
      dist[next] = dist[cur] + 1;//방문 → 기록 → 다음에 거기서 또 탐색
      queue.push(next);
    }
  }
}
let ans =0;

// 결과 출력
let answer = [];

for (let i = 1; i <= N; i++) {
  if (dist[i] === K) answer.push(i);
}


if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.join("\n"));
}