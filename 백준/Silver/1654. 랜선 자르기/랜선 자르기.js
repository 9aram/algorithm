const input = require("fs")
.readFileSync(
"/dev/stdin"
) .toString().split("\n"); 

let line =0;
const [k,n] = input[line++].split(" ").map(Number);//이미 가지고 있는 랜선의 개수 K, 그리고 필요한 랜선의 개수 N

const cables=[];
for(let i=0; i<k; i++){
  cables.push(Number(input[line++]));
}

cables.sort((a,b) => a-b);

let min =1; //정답이 될 수 있는 최소한의 값 (1cm)
let max =cables[cables.length-1] ; //정답이 될 수 있는 최대한의 값 (가장 긴 랜선의 길이)
let answer=0;

while (min<=max){
let mid = Math.floor((min+max)/2); 10,11
let count=0;
for (let x of cables){
  count += Math.floor(x/mid);
}
if(count>=n){
  answer=mid;
  min = mid+1;
}else{
  max=mid-1; //mid가 필요한 랜선의 개수보다 작다는거는 너무 길게 잘랐다는 말
}
}
console.log(answer);