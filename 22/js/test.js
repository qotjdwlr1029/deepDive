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
var value = 1;

const obj = {
    value : 100,
    foo(){
        console.log("foo's this : ", this);
        setTimeout(function(){
            console.log("callback's this : ", this);
            //콜백 함수 내부에 this에는 전역 객체가 바인딩 된다.
            console.log("callback's this.value : ", this.value);
        },100);
    }
}

obj.foo();
*/

/*
[예제 22-11]
var value = 1;

const obj = {
    value : 100,
    foo() {
        // this 바인딩(obj)을 변수 that에 할당한다.
        const that = this;

        // 콜백 함수 내부에서 this 대신 that을 참조한다.
        setTimeout(function(){
            console.log(that.value);
        },500)
    }
}
console.log('start');
obj.foo();
*/

/* 
[예제 22-12]

var value = 1;

const obj = {
    value : 100,
    foo() {
        //콜백 함수에 명시적으로 this를 바인딩한다.
        setTimeout(function(){
            console.log(this.value);
        }.bind(this),500);
    }
}

console.log('start bind');
obj.foo();
*/


/*
[예제 22-13]
var value = 1;

const obj = {
    value : 100,
    foo (){
        //화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value),500);
    }
}

console.log('start setTimeout ');
obj.foo();
*/


/*
예제 22-14 
const person = {
    name : 'Lee',
    getName (){
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.
        return this.name;
    }
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName());
*/


/*
[예제 22-15]

//node.js의 전역 객체는 global이다.
//브라우저의 전역 객체는 window를 사용한다.
// Node.js 환경에서 this.name은 undefined이다.
var name  = 'Bae';

const person = {
    name : 'Lee',
    getName () {
        return this.name;
    }
}

const anotherPerson = {
    name : 'Kim'
};

// getName 메서드를 anotherPerson 객체에 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName());

// getName 메서드를 변수에 할당.
const getName = person.getName;

// getName 메서드를 일반 함수로 호출 -> 전역 객체의 name프로퍼티의 값을 호출한다.
console.log(getName());
*/


/*
//[예제 22-16] 
//프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩 된다.

function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

const me = new Person('Lee');

// getName 메서드를 호출한 객체는 Lee다.
console.log(me.getName());

Person.prototype.name = 'Kim';

// getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName());
*/


/*
//[예제 22-17]
function Circle(radius){
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);

// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);


console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
*/

/*
//[예제 22-18]
function Circle(radius){
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 즉, 일반적인 함수의 호출이다.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3);

// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
console.log(radius);
*/

/*
//[예제 22-19]
function getThisBinding(){
    return this;
}

//this로 사용할 객체
const thisArg = { a : 1 };

console.log(getThisBinding());  //window

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this를 바인딩한다.
console.log(getThisBinding.call(thisArg));
console.log(getThisBinding.apply(thisArg));
*/

/*
//[예제 22-20]
function getThisBinding(){
    console.log(arguments);
    return this;
}

// this로 사용할 객체
const thisArgs = { a : 1 };

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArgs, [1,2,3]));

console.log(getThisBinding.bind(thisArgs, 1, 2, 3 ));
*/

/*
//[예제 22-21]
function convertArgsToday(){
    console.log(arguments);

    //argument 객체를 배열로 변환
    // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr;
}

convertArgsToday(1,2,3);
*/


/*
//[예제 22-22]
function getThisBinding(){
    return this;
}

//this로 사용한 객체
const thisArg = {a : 1};

// bind 메서드는 함수에 this로 사용할 객체로 전달한다.
// bind 메서드는 함수를 호출하지는 않는다.
console.log(getThisBinding.bind(thisArg));
// bind 메서드는 함수를 호출하지 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)());
*/

/*
//[예제 22-24]
const person = {
    name : 'Lee',
    foo(callback){
        // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
        setTimeout(callback.bind(this),500);
    }
}

person.foo(function(){
    console.log(`Hi My name is ${this.name}`);
})
*/



