const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/); //일단 줄대로 끊는다
let line = 0;
const T = Number(input[line++]);
let result = ""; // ✅ 추가
for (let t = 0; t < T; t++) {
  const [h, w] = input[line++].split(" ").map(Number); //H는 그리드의 높이이고, W는 그리드의 너비
  const sheep = [];

  for (let i = 0; i < h; i++) {
    //2차원배열에 넣기
    sheep.push(input[line++].split("")); // 2차원 배열 만들기
  }
  const visited = Array.from(Array(h), () => Array(w).fill(false)); // 방문 여부를 기록할 배열 (h x w 크기)
  let count = 0;


  const dh = [1, -1, 0, 0]; //세로
  const dw = [0, 0, 1, -1]; //가로

function bfs(startR, startC) {
  const queue = [[startR, startC]];
  visited[startR][startC] = true;
  let head = 0; // 현재 처리할 위치를 가리키는 포인터

  while (head < queue.length) {
    const [r, c] = queue[head++]; // shift() 대신 인덱스로 접근

    for (let i = 0; i < 4; i++) {
      const nextR = r + dh[i];
      const nextC = c + dw[i];

      if (nextR >= 0 && nextR < h && nextC >= 0 && nextC < w &&
          sheep[nextR][nextC] === '#' && !visited[nextR][nextC]) {
        visited[nextR][nextC] = true;
        queue.push([nextR, nextC]);
      }
    }
  }
}

  // 모든 칸을 돌며 새로운 양 무리 찾기
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (sheep[i][j] === "#" && !visited[i][j]) {
        count++;
        bfs(i, j);
      }
    }
  }
   result += count + "\n";

//   function dfs(r, c) {
//     visited[r][c] = true;

//     for (let i = 0; i < 4; i++) {
//       const nextR = dh[i] + r;
//       const nextC = dw[i] + c;

//       if (
//         nextR >= 0 && nextR < h && nextC >= 0 && nextC < w && // 1. 범위 체크
//         sheep[nextR][nextC] === "#" && //2. 양인지 확인
//         !visited[nextR][nextC] // 3. 미방문 확인
//       ) {
//         dfs(nextR, nextC);
//       }
//     }
//   }

}console.log(result.trim());
