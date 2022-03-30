/*
//[예제 24-01]
const x = 1;

function outerFunc(){
    const x = 10;

    function innerFunc(){
        //중첩함수 innerFunc함수에서 x를 접근하면 상위 스코프에 있는 outerFunc의 x에 접근한다.
        console.log(x);
    }

    innerFunc();
}

outerFunc();
*/

/*
//[예제 24-02]
const x = 1;

function outerFunc(){
    const x= 10;
    innerFunc();
}

// outerFunc를 호출하면 innerFunc함수를 호출하게 되는데 
// innerFunc에서 x를 접근하게 되면 outerFunc에 있는 10이 아닌 전역에 선언된 1에 접근하게 된다.
// 그 이유는 함수의 호출이 아니라 함수가 정의된 위치에 따라서 스코프가 결정되기 때문이다.
function innerFunc(){
    console.log(x);
}

outerFunc();
*/


/*
//[예제 24-03]
const x = 1;

function foo(){
    const x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();
*/

/*
//[예제 24-04]
//함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경 즉, 상위 스코프의 참조를 저장한다.

const x = 1;

function foo(){
    const x = 10;

    // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
    // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
    bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
function bar(){
    console.log(x);
}
*/

/*
//[예제 24-05]
const x = 1;

// 1)
function outer(){
    const x = 10;
    const inner = function(){ console.log(x) }; // 2)
    return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer();  // 3)
//outer함수의 렉시컬 환경은 inner함수의 [[Environment]] 내부 슬롯에 의해 참조되고 있고
// inner 함수는 전역 변수 innerFunc에 의해 참조되고 있으므로 가비지 컬렉션의 대상이 되지 않기 때문이다.
// 가비지 컬렉터는 누군가가 참조하고 있는 메모리 공간을 함부로 해제하지 않는다.

innerFunc();    // 4) 10

// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명주기가
// 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩함수를 클로저라고 부른다.
*/


/*
//[예제 24-09]
let num = 0;

const increase = function(){
    return ++num;
}

console.log(increase());
console.log(increase());
console.log(increase());
*/

//위의 코드는 오류를 발생시킬 가능성이 있는 코드이다. 
//num변수에 접근이 쉽게 가능하여 조작이 쉽기 때문이다.
// 바르게 동직하기 위해서는 다음의 전제조건을 지켜야 한다.
/**
 * 1. 카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
 * 2. 이를 위해 카운트 상태는 increase 함수만이 변경할 수 있어야 한다.
 */

/*
//[예제 24-10]

// 카운트 상태 변경 함수
const increase = function () {
    //카운트 상태 변수
    let num = 0;

    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
}

//이전 상태를 유지하지 못한다.
console.log(increase());
console.log(increase());
console.log(increase());
*/

//위 예제의 문제는 num의 이전 상태를 저장하지 못한다는 것이다.

/*
//[예제 24-11]

// 카운트 상태 변경 함수
const increase = (function(){

    //카운트 상태 변수
    let num = 0;

    //클로저
    return function(){
        // 카운트 상태를 1만큼 증가시킨다.
        return num++;
    }
}());

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
*/

/*
//[예제 24-12]

const counter = (function(){
    //카운트 상태 변수
    let num = 0;

    // 클로저인 메서드를 갖는 객체를 반환한다.
    // 객체 리터럴은 스코프를 갖지 않는다.
    // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
    return {
        increase : function(){
            return num++;
        },
        decrease : function(){
            return num--;
        }
    }
    // 객체 리터럴의 중괄호는 코드 블록이 아니므로 별도의 스코프를 생성하지 않는다.
}());

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.increase());
*/

/*
//[예제24-13]
const Counter = (function(){

    let num = 0;

    function Counter(){

    }

    Counter.prototype.increase = function(){
        return ++num;
    }

    Counter.prototype.decrease = function(){
        return num > 0 ? --num : 0;
    }

    return Counter;

}());

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());
*/

/*
//[예제 24-15]
// 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.
const counter = (function(){
    // 카운트 상태를 유지하기 위한 자유 변수
    let counter = 0;

    // 함수를 인수로 전달받는 클로저 반환
    return function (predicate){
        // 인수로 전달받은 보조 함수에 상태변경을 위임한다.
        counter = predicate(counter);
        return counter;
    };
}());

// 보조 함수
function increase(n){
    return ++n;
}

// 보조 함수
function decrease(n){
    return --n;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));
*/


/*
//[예제 24-16]
function Person(name, age){
    this.name = name;   //public
    let _age = age;     //private

    this.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    }
};

const me = new Person('Lee',20);
me.sayHi();

const you = new Person('Kim',30);
you.sayHi();
console.log(you.name);
console.log(you._age);
//_age는 생성자 함수의 지역 변수이므로 private하다.
*/

/*
//[예제 24-17]
function Person(name, _age){
    this.name = name;
    let _age = _age;
};

Person.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
}
// 다음의 경우 _age를 접근할 수 없게 된다.
*/

/*
const Person = (function(){
    let _age = 0;

    function Person(name, age){
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function(){
        console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    }

    return Person;
}())

const me = new Person('Lee', 20);
me.sayHi();

const you = new Person('Kim', 30);
you.sayHi();

me.sayHi();
*/

/*
//[예제 24-20]
var funcs = [];

// for문의 변수 선언문에서 var 키워드로 선언한 i 변수는 블록 레벨 스코프가 아닌 
// 함수 레벨 스코프를 갖기 때문에 전역 변수이다. 
for (var i = 0; i < 3; i++) {
    funcs[i] = function() {return i};
}

console.log('outer for : ', i);

for (var j = 0 ; j < funcs.length ; j++) {
    console.log(funcs[j]());
}
*/

/*
//[예제 24-21]
var funcs = [];

for(var i = 0; i< 3;i++){
    funcs[i] = (function(id){
        return function(){
            return id;
        }
    }(i))
};

for (var j = 0 ; j < funcs.length ; j++) {
    console.log(funcs[j]());
};
*/

/* 
//[예제 24-22]
const funcs = [];

for(let i = 0; i < 3;i++){
    funcs[i] = function() { return i };
}

for (var j = 0 ; j < funcs.length ; j++) {
    console.log(funcs[j]());
};
*/



