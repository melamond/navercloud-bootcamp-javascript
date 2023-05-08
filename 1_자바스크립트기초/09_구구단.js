// 2단~9단 출력하는 구구단 로직을 중첩반복문으로
// 출력양식 `a * b = (a * b)`

for(var i = 2; i < 10; i++){
    for(var k = 1; k < 10; k++){
        console.log(`${i} * ${k} = ${i * k}`);
    }
}