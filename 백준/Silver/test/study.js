const input = require("fs").readFileSync("/Users/garam/Documents/projects/algorithm/백준/Silver/test/text.txt").toString().split(/\s+/);
const N = Number(input[0]); //N명의 사람
const K = Number(input[1]); //K번째 사람

const que=[];
const answer=[];
for (let i=1; i<=N ; i++){
    que.push(i); //N명의 사람이 담긴 큐를 만든다. 배열(que)의 맨 뒤에 i를 추가하는 것
}

while (que.length>0){
    for (let i=0; i<K-1;i++){
        que.push(que.shift()); //맨 앞 요소를 꺼내서 (그리고 배열에서 제거) 한 뒤 뒤에추가
    }
    answer.push(que.shift());//K번째 que에서 제거한뒤 답에 넣기
}


console.log("<"+answer.join(", ")+">");
//console.log(`<${answer.join(", ")}>`); //백틱문법

