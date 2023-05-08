function add(n1, n2) {

    return n1 + n2;// 반환문
    console.log(`실행 안되는 곳`); 
}
// 반환값 : 함수 호출이 종료될 때 호출위치에 전달될 값
var r1 = add(5, 7);
console.log(r1);

// 중첩 호출은 괄호 제일 안쪽부터 하나씩
console.log(add(r1, add(3,5)));

// 리턴 없는 void 함수
function showMulti(n1, n2) {
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}

var result = showMulti(3, 5);
console.log(result);

// return 을 탈출문으로 사용
function question(answer) {
    if(answer !== 5050){
        console.log(`계산 똑바로 안합니까?`);
        return;
    }
    console.log('정답입니다');
}

console.log('1~100 의 합은');
question(5050);
question(5040);