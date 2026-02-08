function solution(numbers) {


//이 숫자가 소수인지를 판별
function isPrime(num){
    if(num<2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}
const result = new Set();
const arr = numbers.split("");//틀림 넘버해주면 dfs에서 문제생김 const arr = numbers.split("").map(Number);
const visited = Array(arr.length).fill(false);

// 일단 만들수있는모든 수 
function dfs(chk){
    if(chk.length>0) result.add(Number(chk));
//1
//17
    for(let i=0; i<arr.length; i++){
        if(!visited[i]){
            visited[i]=true; 
            dfs(chk+arr[i]);
            visited[i]=false;
        }
    }
}
//  ├ visited[0] = true
//  ├ dfs("1")
//  │   ├ visited[1] = true
//  │   ├ dfs("17")
//  │   ├ visited[1] = false
//  │   └ return
//  ├ visited[0] = false   ← 🔥 여기서 실행
//  └ 다음 i
dfs("");

// 소수찾기
let count =0;
    for(num of result){
       if(isPrime(num))  count ++;
    }
return count;
}
