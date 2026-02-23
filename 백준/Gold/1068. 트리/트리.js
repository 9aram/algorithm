const fs = require('fs');
// 입력을 읽어옵니다. (백준 설정)
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 노드의 개수
const parentInfo = input[1].split(' ').map(Number); // 부모 노드 정보
const deleteNode = Number(input[2]); // 지울 노드 번호

let root = 0;
let tree = Array.from({ length: N }, () => []);

// 1. 트리 구조 만들기 (인접 리스트)
parentInfo.forEach((parent, child) => { //노드의 부모가 주어
  if (parent === -1) {
    root = child; // 부모가 -1이면 루트 노드!
  } else {
    tree[parent].push(child); // 부모 노드 주머니에 자식 추가
  }
});

let leafCount = 0;

// 2. DFS(깊이 우선 탐색) 함수 정의
function dfs(currentNode) {
  // 만약 시작부터 지울 노드라면? 바로 종료!
  if (currentNode === deleteNode) return;

  let children = tree[currentNode];
  let validChildrenCount = 0;

  // 자식 노드들을 하나씩 확인
  for (let child of children) {
    // 자식 중 지워질 노드가 아니라면 탐색을 계속함
    if (child !== deleteNode) {
      validChildrenCount++;
      dfs(child);
    }
  }

  // 핵심: 지워지지 않은 자식이 하나도 없다면 내가 바로 '리프 노드'!
  if (validChildrenCount === 0) {
    leafCount++;
  }
}

// 3. 예외 처리: 루트 노드를 지우는 경우
if (root === deleteNode) {
  console.log(0);
} else {
  dfs(root); // 루트부터 탐색 시작!
  console.log(leafCount);
}