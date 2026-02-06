function solution(numbers) {
    // 1. 만든 숫자를 저장할 Set (중복 제거를 위해 Set 사용)
    const uniqueNumbers = new Set();
    
    // 방문 여부를 체크할 배열 (종이 조각을 썼는지 안 썼는지 확인)
    const visited = new Array(numbers.length).fill(false);

    // 2. 모든 조합을 만드는 재귀 함수 (DFS)
    function dfs(currentStr) {
        // 현재 만든 문자열이 비어있지 않다면 숫자로 변환해 Set에 추가
        if (currentStr.length > 0) {
            uniqueNumbers.add(Number(currentStr));
        }

        // 더 이상 붙일 조각이 없거나 모든 조각을 다 썼으면 종료 (선택 사항)
        if (currentStr.length === numbers.length) return;

        // 종이 조각 하나씩 순회
        for (let i = 0; i < numbers.length; i++) {
            // 아직 사용하지 않은 조각이라면
            if (!visited[i]) {
                visited[i] = true; // 사용 처리
                dfs(currentStr + numbers[i]); // 문자 이어 붙이고 재귀 호출
                visited[i] = false; // 다른 조합을 위해 사용 취소 (백트래킹)
            }
        }
    }

    // 재귀 함수 시작 (빈 문자열부터 시작)
    dfs("");

    // 3. 소수 개수 세기
    let count = 0;
    for (const num of uniqueNumbers) {
        if (isPrime(num)) {
            count++;
        }
    }

    return count;
}

// 소수 판별 함수 helper
function isPrime(num) {
    if (num < 2) return false; // 0과 1은 소수가 아님
    // 2부터 제곱근까지만 나눠보면 됨 (효율성)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}