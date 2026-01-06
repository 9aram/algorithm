const input = require("fs").readFileSync("/dev/stdin").toString().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]); //첫번째 줄이 저장된다.
const mp = new Map();

for (let i = 0; i < N; i++) {
    //mp.set(i,v); 인텍스의 값찾기가 목적일때. 근데 이 문제는 값 존재여부라서 x
    mp.set(Number(input[idx++]), 1);
}

const M = Number(input[idx++]);

for (let i = 0; i < M; i++) {
    console.log(mp.has(Number(input[idx++])) ? 1 : 0);
}
