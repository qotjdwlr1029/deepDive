/*
[예제 18-01]
//1. 함수는 무명의 리터럴로 생성할 수 있다.
//2. 함수는 변수에 저장할 수 있다.
//3. 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function(num){
    return ++num;
};

const decrease = function(num){
    return --num;
};

//2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

//3. 함수의 매개변수에 전달할 수 있다.
//4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicates){
    let num = 0;

    return function(){
        num = predicates(num)
        return num;
    };
}

//3. 함수는 매개변수에 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

//3. 함수는 매개변수에 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());
*/

/*
[예제 18-02]
function square(number){
    return number * number;
}

console.dir(square);
*/

/*
function square(number){
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

//__proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square,'__proto__'));

// __proto__는 Object.prototype 객체의 접근자 프로퍼티이다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
*/
/*
[예제 18-04]
function multiply(x, y){
    console.log(arguments);
    return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));
*/

/*
[예제 18-05]
function multiply(x, y){

    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x * y;

}

multiply(1,2,3);
*/

/*
[예제 18-06]
function sum(){
    let res = 0;

    //arguments객체는 length프로퍼티가 있는 유사 배열 객체이므로 for문을 사용하여 순회할 수 있다.
    for(let i = 0;i<arguments.length;i++){
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
*/

/*
[예제 18-07]

function sum(){

    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function(pre, cur){
        return pre + cur;
    },0)
}

console.log(sum(1,2));
console.log(sum(1,2,3));
*/

/*
[예제 18-08]

function sum(...args){
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
*/

/*
[예제 18-10]

//함수 객체에서 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

function foo() {}
console.log(foo.length);

function bar(x) {}
console.log(bar.length);

function baz(x, y) {}
console.log(baz.length);
*/

/*
[예제 18-11]

//기명 함수 표현식
var namedFunc = function foo() {}
console.log(namedFunc.name);

//익명 함수 표현식
var anonymousFunc = function() {};
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름 값을 가리킨다.
console.log(anonymousFunc.name);

//함수 선언문 (Function declaration)
function bar() {}
console.log(bar.name);
*/


