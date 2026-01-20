const input = require("fs")
  .readFileSync(
    "/Users/garam/Documents/projects/algorithm/백준/Silver/test/text.txt"
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
//Set으로 중복을 죽이고 → [...]으로 다시 배열로 만들어서 → sort로 정렬
const uniqueArr = [... new Set(arr)]; //...:주머니 제거, set: 중복이 제거된 객체 생성
//arr.sort((a, b) => a - b); 오름차순정렬
uniqueArr.sort((a,b)=>a-b);

const rankMap = new Map();
//uniqueArr 값마다 순서 저장
uniqueArr.forEach((val,idx)=>{
  rankMap.set(val,idx)
});
let result =[];
for(let i=0; i<N; i++){
  result.push(rankMap.get(arr[i])); //원본배열을 들고와서 등수 매기기
}
console.log(result.join(" "));