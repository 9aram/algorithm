const input = require("fs")
  .readFileSync(
    "/Users/garam/Documents/projects/algorithm/백준/Silver/test/text.txt"
  )
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

const result = [];
for (let line of input) {
  if (line === ".") break; // 조건중 . 이나오면 마지막 줄이기에 종료

  const stack = [];
  let same = true;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "(" || line[i] === "[") {
      //일단 여는 괄호나오면 무조건 스택에 담는다.
      stack.push(line[i]);
    } else if (line[i] === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        same = false;
        break;
      }
      stack.pop();
    } else if (line[i] === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        same = false;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) {
    same = false;
  }
  result.push(same ? "yes" : "no");
  //console.log(same ? "yes": "no");
}
console.log(result.join("\n"));
