
/*
[예제15-01]
var x = 1;
var y = 1;

//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x);
console.log(y);
*/

/*
[예제15-02]
var x = 1;

if(true){
    // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 앉게 변수값이 변경되는 부작용을 발생시킨다.
    var x= 10;
}

console.log(x);
*/

/*
[예제 15-04]
//1.이 시점에는 변수 호이스팅에 의해 이미 foo변수가 선언되었다. (1. 선언 단계)
// 변수 foo는 undefined로 초기화된다.(2. 초기화 단계)
console.log(foo); //undefined

//변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;
*/

/*
[예제 15-05]
var foo = 123;
var foo = 456;

let bar = 123;
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
let bar = 456;
*/

/*
[예제 15-06]
let foo = 1;

{
    let foo = 2;
    let bar = 3;
}

console.log(foo);
console.log(bar);
*/

/*
[예제 15-09]
// 런타임 이전에 선언 단계가 진행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
    // 일시적 사각지대 TDZ : Temporary Dead Zone 
    //함수 호이스팅에 의해서 선언은 이루어지나 초기화는 하지 않기 때문에 접근이 불가하다.
    console.log(foo); 
    // TDZ 종료 
    let foo;
    console.log(foo);
    foo = 1;
    console.log(foo);
*/

/*
[예제 15-10] 
let foo = 1;

{
    console.log(foo);
    let foo = 2;
}
*/

var x = 1;

console.log(x);
