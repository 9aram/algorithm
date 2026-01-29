const { count } = require("console");

const input = require("fs")
.readFileSync(
"/dev/stdin"
) .toString()
  .split(/\n/); //일단 줄대로 끊는다


const n= Number(input[0]);
// 4방향 탐색을 위한 좌표 (상, 하, 좌, 우)
const dx = [0,0,-1,1];
const dy = [1,-1,0,0];

//입력값으로 2차원 배열 만들기
const arr=[];
for (let i= 1 ; i <=n;  i++){
arr.push(input[i].trim().split("")); //arr에 한 행씩 넣기
}

const visited = Array.from( Array(n),()=> Array(n).fill(0) ); //일단 n*n배열을 0으로 초기화

// 1. 정상인이 볼 때
let countNormal = 0;
for(let i=0; i<n; i++){
for (let j=0; j<n; j++){
  if(visited[i][j]===0){
    dfs(i,j,arr[i][j]);
    countNormal++;
  }
  }
}
for(let i=0; i<n; i++) visited[i].fill(0); //visited 초기화
// 2. 지도에서 'G'를 전부 'R'로 바꿔버리기 (이제 R과 G는 하나!)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 'G') arr[i][j] = 'R';
  }
}
let countBlind = 0;
for(let i=0; i<n; i++){
for (let j=0; j<n; j++){
  if(visited[i][j]===0){
    dfs(i,j,arr[i][j]);
    countBlind++;
  }
  }
}

//주변 같은 색들을 1로바꿔준다.
function dfs(x,y,color){
  visited[x][y]=1; //현재칸 방문처리

  for (let i=0; i<4; i++){
    const nx = x + dx[i];
    const ny = y + dy[i];
    if(nx>=0 && nx<n && ny>=0 && ny<n){
      if(visited[nx][ny]===0 && arr[nx][ny]===color){ //방문안했고 옮긴 자리의 컬러가 내가 조회한 색이면
        dfs(nx,ny,color);
      }
    }
  }
}

console.log(countNormal + " " + countBlind);