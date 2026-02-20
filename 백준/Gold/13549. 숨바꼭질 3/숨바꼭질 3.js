const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

function solve() {
  const max = 100001;
  const visited = new Array(max).fill(-1); // 방문 여부와 시간을 동시에 저장 (-1은 미방문)
  const queue = [N]; // 시작점
  visited[N] = 0; // 시작 위치의 시간은 0초

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr === K) return visited[curr]; // 동생을 찾으면 종료

    // 1. 순간이동 (0초 소요) -> 덱의 맨 앞에 추가 (unshift)
    if (curr * 2 < max && visited[curr * 2] === -1) {
      visited[curr * 2] = visited[curr]; // 시간은 그대로
      queue.unshift(curr * 2); 
    }

    // 2. 걷기 (1초 소요) -> 덱의 맨 뒤에 추가 (push)
    for (let next of [curr - 1, curr + 1]) {
      if (next >= 0 && next < max && visited[next] === -1) {
        visited[next] = visited[curr] + 1; // 시간 1초 증가
        queue.push(next);
      }
    }
  }
}

console.log(solve());