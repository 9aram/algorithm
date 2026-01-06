function solution(n) {
    // 1) 3진법 문자열로 변환
    // toString() 함수는 숫자를 특정 진수로 변환하는데 사용된다. (숫자 → 문자열)
    const answer = n.toString(3); // 예: 45 -> "1200"
    // 2) 문자열 뒤집기
    const reversed = answer.split("").reverse().join(""); // "0021"
    // 3) 뒤집힌 3진법을 10진법으로 변환 (문자열 → 숫자)
    return parseInt(reversed, 3);
}