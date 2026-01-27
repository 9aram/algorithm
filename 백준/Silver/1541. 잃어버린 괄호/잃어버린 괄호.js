const group = require("fs")
  .readFileSync(
    "dev/stdin",
  )
  .toString()
   .split("-"); // -를 기준으로 끊는다
  let answer =0;
  const plus = group[0].split("+").map(Number);
  
  //for(let i=0; i<plus.length; i++){
  //  answer += plus[i]
  //}
    
  for(let num of plus){
    answer += num;
  }
  for(let j=1; j<group.length; j++){
    const minus = group[j].split("+").map(Number); //이 문제의 목표가 기존 식에서 괄호를 모두 지우고 괄호를 다시 적절히 쳐서 최소값을 만드는것이다.
   
    for (let num of minus){
      answer -= num ;
    }
      
  }

  console.log(answer);
