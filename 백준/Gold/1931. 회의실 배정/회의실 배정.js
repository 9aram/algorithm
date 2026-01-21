const input = require("fs")
  .readFileSync(
    "/dev/stdin",
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

let line =0;
const N = Number(input[line++]);

const arr =[];

for(let i=0; i<N; i++){

  arr.push(input[line++].split(" ").map(Number));

}

arr.sort((a,b)=>{
  if(a[1] === b[1]){ // 만약 a회의의 종료시간(a[1])과 b회의의 종료시간(b[1])이 같다면
   return a[0]-b[0]; // 종료시간이 같다면 시작시간 오름차순으로 정렬
  }
   return a[1]-b[1]; //종료시간 오름차순 정렬
  });
//그리디 시작
let count =0;
let lastEndTime = 0;

for(let i=0; i<N; i++){
const [start,end] = arr[i]

  // 현재 회의의 시작 시간이 이전 회의의 종료 시간 이후라면 선택
  if (start >= lastEndTime) {
    count++;
    lastEndTime = end; // 종료 시간 업데이트
  }
}

console.log(count);

