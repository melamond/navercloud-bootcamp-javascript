var total = 0;

var n = 1;

while(n <= 100){
    if (n%2 === 1){
        total += n;
    }
    n++;
}

console.log(`1~100까지의 홀수의 총합 : ${total}`);