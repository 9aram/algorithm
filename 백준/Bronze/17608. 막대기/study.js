const input = require("fs").readFileSync("/Users/garam/Documents/projects/algorithm/백준/Silver/test/text.txt").toString().split(/\s+/);

let index = 0;
const N = Number(input[index++]);

const value = [];
for(let i=0; i<N; i++){
    value.push(Number(input[index++]));
}

const stack = [];
stack.push(value[value.length-1]);
let count=1;
for (let i= N-2; i>=0;i-- ){
    if(value[i]>stack[stack.length-1]){
        stack.push(value[i])
        count++
    }
}
console.log(count);
