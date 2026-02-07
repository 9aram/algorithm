const input = require("fs")
.readFileSync(
"/dev/stdin"
) .toString().split("\n"); 

//일단 주어진n으로 모든 가능한 수를 만든다
const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
//오른쪽부터 왼쪽으로가면서 a[i] < a[i+1] 인 자리 찾기
let i=n-2;
//1 3 5 2 4
while(i>=0 && arr[i]>=arr[i+1]){
i--;
}
if(i<0){
 console.log(-1);
 return;
}
//거기부터 보다 큰값중 가장작은값 찾아 바꾸고 //뒤쪽은 이미 내림차순 
let j = n-1
while(arr[i] >=arr[j]){
j--;
}

[arr[i],arr[j]] = [arr[j], arr[i]];
//다시 정렬 

let left = i+1;
let right = n-1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}

// 출력
console.log(arr.join(" "));
