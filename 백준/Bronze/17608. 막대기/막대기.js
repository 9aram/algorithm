const input = require("fs").readFileSync("/dev/stdin").toString().split(/\s+/);
let index = 0;
const N = Number(input[index++]); // 총 몇개의 막대기가 있는지

const value = [];
for(let i=0; i<N; i++){
    value.push(Number(input[index++])); // N의 갯수만큼 막대기 값을 저장해준다
}

const stack = [];
stack.push(value[value.length-1]); //마지막 막대기 수를 저장한다.
let count=1;
for (let i= N-2; i>=0;i-- ){ //마지막에서 두번째 값부터 하나씩 저장하면서 비교한
    if(value[i]>stack[stack.length-1]){
        stack.push(value[i])
        count++
    }
}
console.log(count);