const TODAY_SALE_RATE = 0.2;
const PI = 3.141592;

const kim = {
    name : '김철수',
    age : 25,
};
/*
kim = {
    name : '새철수',
    age : 25,
};
*/
kim.name = '김칠수'; // 스택의 주소값은 고정이나 힙이 들고 있는 참조내용물을 바꾸는것은 막을 수 없음
console.log(kim);
