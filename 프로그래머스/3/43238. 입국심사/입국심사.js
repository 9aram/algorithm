function solution(n, times) {
    // 1. 입국심사를 기다리는 사람의 범위(시간)를 정합니다.
    // 최소 시간: 가장 빠른 심사관이 1명이라도 처리하는 시간 (이론상 최소는 1이지만, 여기선 문제 조건에 맞춰 times를 정렬 후 times[0] 등으로 해도 되고, 단순히 1로 둬도 됩니다.)
    // 최대 시간: 가장 느린 심사관한테 모두가 검사받는 최악의 경우 (가장 느린 시간 * 사람 수)
    
    // 이분 탐색을 위해 times 배열을 오름차순 정렬합니다. (필수는 아니지만 left/right 계산할 때 편함)
    times.sort((a, b) => a - b);
    let left = times[0];  //7         
    let right = times[times.length-1] * n; //60
    let anw=0;
    while(left <=right) {//2. left가 right보다 커지면 탐색 범위를 다 훑은 것이므로 종료합니다.
        let mid = Math.floor((left +right)/2);//33
        // 3. mid 시간 동안 심사관들이 처리할 수 있는 총 사람 수 계산
        let count = 0;
        for (let time of times) {
            count += Math.floor(mid / time); // 각 심사관별 처리 가능 인원 누적
            // (최적화 팁) 이미 n명을 넘겼으면 더 계산할 필요 없음
            if (count >= n) break;
        }
        if (count >=n){ //처리한사람이 n보다 많다는거는 남는다는거
            anw = mid;
            right = mid-1;
        }else {
            left = mid+1
        }
    }
    return anw;
}