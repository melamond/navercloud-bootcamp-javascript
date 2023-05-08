/*
Q. n의 약수의 개수를 구하기
1. 정수 n을 받아 n의 약수 출력
약수의 개수를 리턴하는 함수 calcDivisor 정의
2. 약수의 출력은 함수 내부에서
*/

function calcDivisor(n) {
    var divisor = [];
    var count = 0;
    for(i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
            divisor.push(i);
        }
    }
    console.log(`정수 ${n}의 약수의 개수는 ${count}입니다.`); // divisor.length
    console.log(`약수는 ${divisor}`);
}

calcDivisor(10);