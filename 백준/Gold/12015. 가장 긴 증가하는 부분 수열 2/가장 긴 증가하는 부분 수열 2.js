const input = require("fs").readFileSync("/dev/stdin").toString().split(/\n/); //일단 줄대로 끊는다
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
// 3. 이분 탐색 함수 (lower_bound) 정의
// 역할: LIS 배열 안에서 target이 들어갈 '가장 왼쪽 자리'를 찾음
function lowerBound(arr, target) { //arr: 검색할 배열 (이미 정렬되어 있어야 함), target: 찾을 값 (이 값보다 크거나 같은 곳을 찾음)
    let start = 0;
    let end = arr.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        // 중간값이 타겟보다 작으면? -> 오른쪽을 탐색 (start를 올림)
        if (arr[mid] < target) {            start = mid + 1;        } 
        // 중간값이 타겟보다 크거나 같으면? -> 왼쪽을 탐색 (end를 내림)
        else {            end = mid;        }
    }
    return end; // 여기가 target이 들어갈 자리(인덱스)입니다.
}
  const list=[];

  for(let i=0; i<n; i++){

    let target = arr[i];
    if(list.length === 0 || list[list.length-1]<target){list.push(target);}
    else{
      list[lowerBound(list,target)] = target;
    }
        
  }
console.log(list.length);
