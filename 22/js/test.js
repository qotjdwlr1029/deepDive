/*
//[예제 22-01]
const circle = {
    // 프로퍼티 : 객체 고유의 상태 데이터
    radius : 5,
    // 메서드 : 상태 데이터를 참조하고 조작하는 동작
    getDiameter(){
        // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
        // 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
        return 2 * circle.radius;
    }
};

console.log(circle.getDiameter());
*/

// this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다. 
// this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

/*
//[예제 22-03]
const circle = {
    radius : 5,
    getDiameter(){
        // this는 메서드를 호출한 객체를 가리킨다.
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());
*/


/* 
//[예제 22-04]
//생성자 함수
function Circle(radius){
    //this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
}

Circle.prototype.getDiameter = function(){
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    return 2 * this.radius;
}

//인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter());
*/

//자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this바인딩이 동적으로 결정된다.

/*
//[예제 22-05]

// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this);  //window

function square(number){
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this);
    return number * number;
}

square(2);

const person = {
    name : 'Lee',
    getName () {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this);
        return this.name;
    }
};
console.log(person.getName());

function Person(name){
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this);
}

const me = new Person('Lee');
*/

/*
//[예제 22-06]

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
    console.dir(this);
}

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo();   //window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.

const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo();

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name : 'Lee'};

foo.call(bar);
foo.apply(bar);
foo.bind(bar)();
*/


/*
[예제 22-07]

function foo() {
    console.log("foo's this : ", this);
    function bar() {
        console.log("bar's this : ", this);
    }
    bar();
}
foo();

//일반 함수로 호출하면 함수 내부의 this는 전역 객체가 바인딩된다.
*/

/*
//[예제 22-08]

function foo(){
    'use strict';

    console.log("foo's this : ", this);
    function bar(){
        console.log("bar's this : ", this);
    }

    bar();
}
foo();
*/

/*
//[예제 22-09]

// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티이다.
var value = 1;

// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
    value : 100,
    foo(){
        console.log("foo's this : ", this);
        console.log("foo's this.value : ", this.value);

        function bar(){
            console.log("bar's this : ", this);
            console.log("bar's this.value : ", this.value);
        }

        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수의 this에는
        // 전역 객체가 바인딩된다.
        bar();
    }
};

obj.foo();
*/


/*
//[예제 22-10]
*/

var value = 1;

const obj = {
    value : 100,
    foo(){
        console.log("foo's this : ", this);
        setTimeout(function(){
            console.log("callback's this : ", this);
            console.log("callback's this.value : ", this.value);
        },100);
    }
}

obj.foo();


