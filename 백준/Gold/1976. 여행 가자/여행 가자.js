const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const N = Number(input[line++]); // 도시 수
const M = Number(input[line++]); // 여행 도시 수

// 그래프
const graph = [];
for (let i = 0; i < N; i++) {
  graph.push(input[line++].split(" ").map(Number));
}

// 여행 계획
const plan = input[line++].split(" ").map(x => Number(x) - 1); //주어지는 도시는 1부터 시작하는데 우리가 만들어놓은 그래프는 0부터시작하니깐

// 방문 배열
const visited = new Array(N).fill(false);

// BFS
const queue = [plan[0]];  //여행 첫 도시를 큐에 넣고 BFS 시작
visited[plan[0]] = true;

let head = 0;
while (head < queue.length) {
  const cur = queue[head++];

  for (let next = 0; next < N; next++) {
    if (graph[cur][next] === 1 && !visited[next]) {
      visited[next] = true;
      queue.push(next);
    }
  }
}

// 여행 계획 확인
let possible = true;
for (let city of plan) {
  if (!visited[city]) {
    possible = false;
    break;
  }
}

console.log(possible ? "YES" : "NO");