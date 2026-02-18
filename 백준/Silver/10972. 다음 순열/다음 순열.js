const input = require("fs")
  .readFileSync(
   "/dev/stdin")
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number); 

  //뒤에서부터 i+1이 i보다 큰지점을 찾는다.
  let i=n-2;
  //13542
  while ( i>=0 && arr[i] >= arr[i+1] ){
      i--;
  }
  if(i<0){ console.log("-1"); return;}
  //찾은 i로 뒤에서부터 i다음으로 바로 큰 숫자를찾는다.

  for(let j=n-1; j>=0 ; j--){
    if(arr[i]<arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; break; 
    }
  }
  let left = i+1;
  let right = n-1;

  while(left<right){
    [arr[left],arr[right]] = [arr[right], arr[left]]; //j를 “오른쪽에서부터 처음 만나는 arr[i]보다 큰 값”으로 고르기 때문에 swap 이후에도 i+1 ~ n-1 구간의 상대적인 내림차순 구조는 절대 깨지지 않는다
    left ++;
    right --;
  }
console.log(arr.join(" ")) ;

  //