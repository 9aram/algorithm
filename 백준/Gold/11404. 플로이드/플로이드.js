const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const m = parseInt(input[1]);

// 1. 초기 표 세팅 (모두 무한대로 초기화)
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

// 2. 자기 자신으로 가는 비용은 0으로 설정
for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

// 3. 버스 노선 정보 입력 (똑같은 노선이 있으면 가장 싼 것만 저장)
for (let i = 2; i < 2 + m; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  dist[a][b] = Math.min(dist[a][b], c);
}

// 4. 플로이드-워셜 알고리즘 핵심 엔진 (경유지 k가 가장 바깥!)
for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      dist[a][b] = Math.min(dist[a][b], dist[a][k] + dist[k][b]);
    }
  }
}

// 5. 결과 출력 (Infinity로 남아있는 곳은 0으로 바꿔서 출력)
let result = '';
for (let i = 1; i <= n; i++) {
  let row = [];
  for (let j = 1; j <= n; j++) {
    if (dist[i][j] === Infinity) {
      row.push(0);
    } else {
      row.push(dist[i][j]);
    }
  }
  result += row.join(' ') + '\n';
}

console.log(result.trim());