const input = require("fs")
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

// 1. 입력 처리
const [S, P] = input[0].split(' ').map(Number);
const dna = input[1];
const target = input[2].split(' ').map(Number); // [A, C, G, T] 최소 개수

let current = [0, 0, 0, 0]; // 현재 윈도우의 [A, C, G, T] 개수
let checkCount = 0; // 조건을 만족하는 알파벳 종류의 수 (0~4)
let ans = 0;

// 문자를 인덱스(0, 1, 2, 3)로 변환하는 함수
function getIdx(char) {
    if (char === 'A') return 0;
    if (char === 'C') return 1;
    if (char === 'G') return 2;
    if (char === 'T') return 3;
}

// 문자를 추가할 때 로직
function add(char) {
    let idx = getIdx(char);
    current[idx]++;
    if (current[idx] === target[idx]) checkCount++;
}

// 문자를 뺄 때 로직
function remove(char) {
    let idx = getIdx(char);
    if (current[idx] === target[idx]) checkCount--;
    current[idx]--;
}

// 2. 초기 세팅: 0인 조건은 이미 만족한 것으로 간주
for (let i = 0; i < 4; i++) {
    if (target[i] === 0) checkCount++;
}

// 3. 첫 번째 윈도우 (0부터 P-1까지) 현재 P만큼 체크한다
for (let i = 0; i < P; i++) {
    add(dna[i]);
}
if (checkCount === 4) ans++;

// 4. 슬라이딩 윈도우 이동
for (let i = P; i < S; i++) {
    let j = i - P; // 나가는 글자의 인덱스
    
    add(dna[i]);    // 새 글자 추가
    remove(dna[j]); // 옛날 글자 제거
    
    if (checkCount === 4) ans++;
}

console.log(ans);