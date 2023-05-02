// js에서도 math.random()으로 난수발생가능
// math.floor로 내림처리
var age = Math.floor((Math.random()*100));
console.log(age)

if(age>19){
    console.log("성인입니다, 주류 구매가 가능합니다");
} else if (age >= 17){
    console.log("고등학생입니다.")
} else{
    console.log("미취학아동입니다")
}