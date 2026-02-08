function solution(numbers) {
  const result = new Set();
  const arr = numbers.split("");
  const visited = Array(arr.length).fill(false);

  // 소수 판별
  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 순열 완전탐색 (DFS)
  function dfs(current) {
    if (current.length > 0) {
      result.add(Number(current));
    }
//17
    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(current + arr[i]);
        visited[i] = false;
      }
    }
  }

  dfs("");

  let answer = 0;
  for (const num of result) {
    if (isPrime(num)) answer++;
  }

  return answer;
}