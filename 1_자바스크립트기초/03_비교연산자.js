var a = '5';
var b = '5';
console.log(a===b);
console.log(a!==b);
console.log('==============');

// == 연산자는 생각대로 작동안함
console.log(0=='0');
console.log('0'=='');
console.log(0=='');
console.log(false=='false');
console.log(false=='0');
console.log('==============');

console.log(0==='0');
console.log('0'==='');
console.log(0==='');
console.log(false==='false');
console.log(false==='0');
console.log('==============');

// 문자열 대소비교 (ASCII Code 기준으로 비교됨)
// 사전 단어장 순서 (다른 언어는 제일 앞글자만 비교), 만약 포함관계면 더 긴쪽이 큼
console.log('tomato' <= 'tomaTo');
console.log('tomato' >= 'tomaTo');
console.log('zaa' < 'zb');