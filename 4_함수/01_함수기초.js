// 함수 정의하기(실행과는 별개)
function makeFood(sauce) {
    console.log(`면을 삶습니다`);
    console.log(`${sauce}소스를 넣고 면수와 볶습니다`);
    console.log(`${sauce}스파게티 완성`);
}

// 함수호출
makeFood(`까르보나라`);

// 원 넓이 구하는 함수 정의
// 함수명은 calcCircle, 반지름으로 변수 r 을 요구합니다
// 원주율(3.14)*반지름의 제곱이 원의 넓이
function calcCircle(r) {
    const PI = 3.14;
    var circle = PI * (r ** 2);
    return circle;
}

console.log(calcCircle(5));
console.log(calcCircle(3));