console.log('함수 선언문');
/*function add(x, y){

    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError ('인수는 모두 숫자값이어야 합니다.');
    }
    return x + y;
}*/

/*function add(a,b,c){
    var a = a || 0;
    var b = b || 0;
    var c = c || 0;

    return a + b + c;
}

console.log(add(2));*/

/*
//참조에 의한 전달과 외부상태 변경
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = { name : 'Bae' };

console.log(num);
console.log(person);

changeVal(num, person);

console.log("after changeVal");
console.log(num);
console.log(person);*/

/*
//즉시 실행 함수
(function(){
    var a = 3;
    var b = 5;

    return a * b;
}());*/

/*
//즉시 실행함수는 return 값을 바로 반환하여 출력할 수 있다.
var res = (function(){
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

var res2 = (function(a, b){
    return a * b;
}(3,5));

console.log(res2);*/

/*function countdown(n){
    for(var i = n; i >=0 ;i--){
        console.log(i);
    }
}

//countdown(10);

function countdown2(n){
    if(n < 0) return;
    console.log(n);
    countdown2(n-1);
}

countdown2(5);*/

/*
//중첩함수
function outer(){
    var x = 1;

    function inner(){
        var y = 2;
        console.log(x + y);
    }

    inner();
}

outer();*/


/*
//고차함수와 콜백함수
//고차
function repeat(n, f){
    for(var i = 0;i<n ;i++){
        f(i);
    }
}

//콜백
var logAll = function(i){
    console.log(i);
}

repeat(5,logAll);

var logHalf = function(i){
    i % 2 ? console.log(i) : null;
}

repeat(10,logHalf);*/

var count = 0;

/*
//순수 함수
function increase(n){
    return ++n;
}

count = increase(count);
console.log(count);
count = increase(count);
console.log(count);*/


//비순수 함수
function increase(){
    count++
}

increase();
console.log(count);
increase();
console.log(count);