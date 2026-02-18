const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

// 예외: 카드가 1개면 비교 0
if (n === 1) {
  console.log(0);
  return;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
//왼쪽은 i*2+1, 오른쪽은 i*2+2; 부모는 i-1/2
  bubbleUp() { //현재위치를 구해서 부모 인덱스를 구해서 자식이 더크면 패스하고 부모가 더 크면 위치바꾼다
   //새로 들어온 노드 하나만 이동, 부모랑만 비교, 왼/오 구분 필요 없음 ✅
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;

      [this.heap[parent], this.heap[idx]] =
        [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() { //부모 아래에 자식 둘 있음, 둘 중 더 작은 애 선택해야 함, 그래서 왼/오 비교 필요 ✅
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] =
        [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

// 🔹 힙에 입력
const heap = new MinHeap();
for (let i = 1; i <= n; i++) {
  heap.push(Number(input[i]));
}

// 🔹 계산
let answer = 0;

while (heap.size() > 1) {
  const a = heap.pop();
  const b = heap.pop();

  const sum = a + b;
  answer += sum;
  heap.push(sum);
}

console.log(answer);