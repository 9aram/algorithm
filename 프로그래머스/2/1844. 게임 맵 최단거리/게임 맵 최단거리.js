function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 이동할 네 방향 (상, 하, 좌, 우)
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    // 큐 초기화: [y, x, 거리]
    const queue = [[0, 0, 1]];
    
    // 시작 지점 방문 처리
    maps[0][0] = 0;
    
    while (queue.length > 0) {
        const [y, x, dist] = queue.shift();
        
        // 목적지에 도달했으면 거리 반환
        if (y === n - 1 && x === m - 1) {
            return dist;
        }
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            // 맵 범위 내에 있고, 갈 수 있는 길(1)인 경우
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
                // 방문 표시 (벽으로 만듦)
                maps[ny][nx] = 0;
                queue.push([ny, nx, dist + 1]);
            }
        }
    }
    
    return -1; // 도달할 수 없는 경우
}