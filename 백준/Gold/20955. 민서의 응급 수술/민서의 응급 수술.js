const { group } = require("console");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let line=0;
const [N,M] = input[line++].split(" ").map(Number);
const parent = Array.from(Array(N+1),(_,i)=>i); //각 뉴런 스르로를 부모로만든다. 0 1 2 3 4
let answer=0;
function find(x){//만약 parent 배열이 [0, 2, 3, 3, 4]
    //find(1) 호출 ➡️ parent[1]은 2니까, find(2)를 부름.
    //find(2) 호출 ➡️ parent[2]는 3이니까, find(3)을 부름.
    //find(3) 호출 ➡️ parent[3]은 3이니까, 드디어 "3"을 리턴! 
    //경로 압축: 돌아오면서 parent[1]과 parent[2]를 모두 3으로 직접 바꿔버립니다.
    if(parent[x] === x ) return x;
    //부모의 대장을 다시 찾으러 올라갑니다.
    return parent[x] = find(parent[x]);//1 2/23/3

}
function union(u,v){
    const rootu = find(u);
    const rootv = find(v);

    if(rootu !== rootv){
        if(rootu<rootv){
        parent[rootv] = rootu;
        }else{
            parent[rootu] = rootv;
        }
    }else{
        answer ++
    }
}

for(let i=0; i<M; i++){
    //if (parent[i] )
    const [U,V] = input[line++].split(" ").map(Number);
    union(U,V);
}
//아무것도 연결안된 뉴런도 계산해줘야한다ㅣ
let groupC=0;
for(let i=1; i<=N;i++){
    if(parent[i] === i ){
        groupC++
    }

}
console.log(answer+(groupC-1));