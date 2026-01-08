//const { listenerCount } = require("process");
const input = require("fs").readFileSync("/Users/garam/Documents/projects/algorithm/백준/Silver/test/text.txt").toString().split(/\s+/);

let index = 0;
//const number = input[index++] 해서 이걸 다시 쪼갰더니 정규식을 잘못알고있었던것.
const N= Number(input[index++]);
const M = Number(input[index++]);

const mp = new Map();

//i < index + N 이렇게 했더니 인덱스가 무한늘어남 
for(let i=0; i<N; i++){//0,3/1,3/2,3
    mp.set(input[index++],"1");//N의 갯수만큼 돌림
}

const answer=[];
for (let j=0 ; j<M; j++){//0,4/1,4/2,4/3,4
    const name = input[index++];
    if(mp.has(name)){
        
        answer.push(name);
    };
}
answer.sort();
console.log(answer.length);
console.log(answer.join("\n"));

