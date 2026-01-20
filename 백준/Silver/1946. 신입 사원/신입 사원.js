const input = require("fs")
  .readFileSync(
    "/dev/stdin",
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

let line = 0;
const T = input[line++]; //테스트케이스 수

for (let t = 0; t < T; t++) {
  const N = input[line++];
  const applicants = [];

  for (let i = 0; i < N; i++) {
    applicants.push(input[line++].split(" ").map(Number)); //공백(" ")을 기준으로 글자를 싹둑 잘라서 배열로 만들어요.
  }
  // [1. 정렬 단계] 서류 등수(첫 번째 요소) 기준 오름차순 정렬
  applicants.sort((a, b) => a[0] - b[0]); //서류심사 기준 오름차순 정렬

  // [2. 그리디 단계]
  let count = 0;
  let minInterviewRank = Infinity; //지금까지 지나온 사람들 중 면접을 제일 잘 본 사람의 등수를 저장

  for (let i = 0; i < N; i++) {
    const currentInterview = applicants[i][1]; //현재 내가 검사하고 있는 지원자의 면접 등수

    // 현재까지의 1등 면접 점수보다 내가 더 점수가 낮다면(등수가 높다면) 합격!
    if (currentInterview < minInterviewRank) {
      count++;
      minInterviewRank = currentInterview; // 기준점 갱신
    }
  }
  console.log(count);
}
