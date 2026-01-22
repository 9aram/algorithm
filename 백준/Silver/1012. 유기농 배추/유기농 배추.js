const input = require("fs")
  .readFileSync(
   "/dev/stdin")
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

// 1. 입력 데이터 가공
// 케이스의 개수 T, 가로길이 M, 세로길이 N, 배추개수 K
let inputIndex = 0;
const T = parseInt(input[inputIndex++]); 

// 4방향 탐색을 위한 좌표 (상, 하, 좌, 우)
const dm = [0, 0, -1, 1];
const dn = [1, -1, 0, 0];

// 결과들을 담을 배열
const results = [];

// 각 테스트 케이스마다 실행
for (let i = 0; i < T; i++) {
    // M: 가로, N: 세로, K: 배추 개수
    const [M, N, K] = input[inputIndex++].split(' ').map(Number);
    
    // 2. 밭(2차원 배열) 만들기 (0으로 초기화)
    // Array.from을 사용하여 N행 M열의 배열 생성
    const field = Array.from(Array(N), () => Array(M).fill(0));

    // 3. 배추 심기 (입력받은 좌표에 1 표시)
    for (let j = 0; j < K; j++) {
        const [m, n] = input[inputIndex++].split(' ').map(Number);
        // 문제에서는 m이 가로, n이 세로입니다. 배열은 field[세로][가로] 순서임에 주의!
        field[n][m] = 1; 
    }

    let wormCount = 0;

    // 4. 밭 전체를 순회하며 지렁이(덩어리) 세기
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            // 배추가 있다면(1), 새로운 덩어리 발견!
            if (field[n][m] === 1) {
                wormCount++; // 지렁이 한 마리 투입
                dfs(m, n, N, M, field); // 연결된 배추들을 모두 지우러 출발
            }
        }
    }
    
    results.push(wormCount);
}

console.log(results.join('\n'));

// --- 핵심 로직: DFS 함수 ---
function dfs(m, n, N, M, field) {
    // 현재 위치를 방문 처리 (1 -> 0으로 바꿔서 다시 방문 안 하게 함)
    field[n][m] = 0;

    // 상하좌우 4방향 확인
    for (let i = 0; i < 4; i++) {
        const nm = m + dm[i];
        const nn = n + dn[i];

        // 밭의 범위를 벗어나지 않고, 배추(1)가 있다면 계속 탐색
        if (nm >= 0 && nm < M && nn >= 0 && nn < N && field[nn][nm] === 1) {
            dfs(nm, nn, N, M, field); // 재귀 호출 (깊이 우선 탐색)
        }
    }
}