const input = require("fs")
  .readFileSync(
   "/dev/stdin")
  .toString()
  .split(/\n/); //일단 줄대로 끊는다

const T  = Number(input[0]); //테스트케이스 수
let line =1;
for(let t=0; t<T; t++){
   let n = Number(input[line++]); // 날의 수
    const prices = input[line++].split(" ").map(Number); //주가
   let maxprice=0;
   let total=0;
   for(let i= n-1; i >= 0 ; i--){ //10 7 8
        
        if(prices[i]>maxprice){
            maxprice = prices[i] //// 상황 1: 오늘 가격이 더 비싸네? 기준점 업데이트!
        }else{//상황 2: 미래(max_price)가 더 비싸네? 오늘 사서 미래에 팔자!
            total += (maxprice-prices[i]);
        }
    }
     console.log(total);
}