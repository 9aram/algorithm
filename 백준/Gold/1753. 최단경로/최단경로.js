const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let line =0;
const [V, E] = input[line++].split(" ").map(Number);
const startK = Number(input[line++]);

const graph = Array.from(Array(V+1),()=>[]);//정점의 갯수로 그래프 배열 만들기

for(let i=0; i<E; i++){
    const [ u, v, w] = input[line++].split(" ").map(Number);
    graph[u].push([v,w]);
}

// --- 최소 힙(Min Heap) 구현 시작 ---
class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    size() { return this.heap.length; }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.heap.length) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallerChild = rightChild < this.heap.length && this.heap[rightChild][0] < this.heap[leftChild][0] 
                               ? rightChild : leftChild;
            if (this.heap[index][0] <= this.heap[smallerChild][0]) break;
            [this.heap[index], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[index]];
            index = smallerChild;
        }
    }
}
      

//거리배열
const dist = Array(V + 1).fill(Infinity);
dist[startK] = 0;

const pq = new MinHeap(); // 정렬된 배열 대신 힙을 사용!
pq.push([0, startK]);

while (pq.size() > 0) {
    const [d, cur] = pq.pop(); // 힙에서 가장 작은 값을 꺼냄

    if (dist[cur] < d) continue;

    for (const [next, weight] of graph[cur]) {
        const cost = d + weight;
        if (cost < dist[next]) {
            dist[next] = cost;
            pq.push([cost, next]);
        }
    }
}

// 출력 (console.log를 여러 번 하면 느리니 하나로 합쳐서 출력)
let result = "";
for (let i = 1; i <= V; i++) {
    result += (dist[i] === Infinity ? "INF" : dist[i]) + "\n";
}
process.stdout.write(result);

  