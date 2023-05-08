var x = '전역변수 x';
function outer(x) {
    var y = "outer 지역변수 y";
    console.log(x);
    console.log(y);

    function inner() {
        var z = "inner 지역변수 z";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
outer('outer 지역변수 x');

console.log(x);
console.log(y);
console.log(z);