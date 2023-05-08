// 매개변수 Parameter  : 함수정의시 외부전달값을 저장하기 위해 선언하는 변수
function calcRangeTotal(begin, end) {
    var total = 0;
    for(var i = begin; i <= end; i++){
        total += i;
    }

    return total;
}

// 인수 Argument : 호출할 떄 함께 제공하는 값이나 표현식
console.log(calcRangeTotal(1, 10));

//아래 구문 해석하기
console.log(`중첩 표현식 예시 : ${calcRangeTotal(1, calcRangeTotal(1, 10))}`);

//매개변수 기본값 설정 (ES6)
function greet(name = '익명유저') {
    console.log(`안녕하세요 ${name}님 반갑습니다!`);
    console.log(`오늘 공부하실 범위는 JS 함수입니다!`);
}

greet('민세기');
greet();