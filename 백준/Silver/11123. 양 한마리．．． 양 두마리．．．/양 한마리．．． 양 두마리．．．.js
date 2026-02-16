const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/); //일단 줄대로 끊는다
let line = 0;
const T = Number(input[line++]);
let result = ""; // ✅ 추가
for (let t = 0; t < T; t++) {
  const [h, w] = input[line++].split(" ").map(Number); //H는 그리드의 높이이고, W는 그리드의 너비
  const sheep = [];
  for(let i=0; i<h; i++){
    sheep.push(input[line++].split(""));
  }
  const visited = Array.from(Array(h),()=>Array(w).fill(false));
  let count =0;

  const dh = [1, -1, 0, 0]; //세로
  const dw = [0, 0, 1, -1]; //가로

  function test (startR, startC)
    {
        visited[startR][startC]=true;
        const que = [[startR, startC]];
        let head =0;

        while (head < que.length){ //큐가 빌 때까지 계속 탐색. 큐에 있는 모든 연결된 #를 다 퍼뜨림
            const [r,c ] = que[head++];

            for(let i=0; i<4; i ++){
                const nextR = r+dh[i];
                const nextC = c+dw[i];

                if(nextR>=0&&nextR < h && nextC>=0 && nextC<w &&
                    !visited[nextR][nextC] && sheep[nextR][nextC]==='#'){
                        que.push([nextR, nextC]);
                        visited[nextR][nextC] = true;
                    }
            }
        }
    }  

    for( let i=0; i<h; i++){
        for (let j=0; j<w; j++){
            if(sheep[i][j] === '#'  && visited[i][j] === false) {
            count ++;
                test(i,j);
                
            }
        }
    }
 result += count + "\n";
}
console.log(result.trim());