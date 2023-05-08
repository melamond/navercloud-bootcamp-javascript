// 이 함수를 화살표 함수로 고쳐보세요
/*
function multi(n1, n2) {
    return n1 * n2
}
*/

// 화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`multi 함수 결과 : ${r1}`);

// 아래 함수를 화살표 함수로
/*
function sayHello() {
    console.log('안녕하세요');
}
*/
const sayHello = () => console.log('안녕하세요');
sayHello();

// 객체 내부에서 메소드로 사용되는 화살표함수
const kim = {
    name : '김자스',
    age : 25,
    greeting : sayHello,
    study : () => console.log("빡공 갑니다"),
}

kim.study();

// 정수1 개를 전달하면 정수의 제곱을 리턴하는 함수 pow
// const pow = (n) => {return n ** 2};
const pow = n => n**2;
console.log(pow(2));