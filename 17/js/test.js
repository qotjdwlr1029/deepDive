/*
[예제 17-01]
const person = new Object();

person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My Name is ' + this.name);
};

console.log(person);
person.sayHello();
*/

/*
[예제17-03]
//String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

//Function 생성자 함수에 의한 Function 객체 생성
const funcObj = new Function('x','return x * x');
console.log(typeof funcObj);
console.log(funcObj);

//Array 생성자 함수에 의한 Array 객체 생성
const ArrObj = new Array(1,2,3);
console.log(typeof ArrObj);
console.log(ArrObj);

//RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

//Date 생성자 함수에 의한 Date객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);
*/

/*
[예제17-03]
const circle1 = {
    radius : 5,
    getDiameter() {
        return this.radius * 2;
    }
}

console.log(circle1.getDiameter());

const circle2 = {
    radius : 10,
    getDiameter() {
        return this.radius * 2;
    }
}

console.log(circle2.getDiameter());
*/

/*
[예제 17-05]
function Circle(radius){
    this.radius = radius,
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

//인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
*/

/*
[예제 17-07]
function Circle(radius){
    this.radius = radius,
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

const circle3 = Circle(15);

//일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3);

//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius);
*/

/*
[예제 17-10]
function Circle(radius){

    //1.암묵적이고 인스턴스가 생성되고 this가 바인딩된다.
    console.log(this);  //Circle {}
    
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

const circle = new Circle(1);
console.log(circle);
*/

/*
[예제 17-11]
function Circle(radius){

    //1.암묵적이고 인스턴스가 생성되고 this가 바인딩된다.
    console.log(this);  //Circle {}
    
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }

    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle);
*/

/*
[예제 17-12]

function Circle(radius){

    //1.암묵적이고 인스턴스가 생성되고 this가 바인딩된다.
    console.log(this);  //Circle {}
    
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }

    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 원시값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle);
*/

/*
[예제 17-13]
//함수는 객체다
function foo(){}

//함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

//함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function(){
    console.log(this.prop);
}

foo.method();
 */

/*
[예제 17-14]
function foo() {}

// 일반적인 함수로서 호출 : [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출 : [[Construct]]가 호출된다.
new foo();

*/

/*
[예제 17-17]
// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y){
    return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();

//함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst);

// 객체를 반환하는 일반 함수
function createUser(name, role){
    return {name, role}
}

//일반 함수를 new 연산자와 함께 호출
inst = new createUser('Lee','admin');

//함수가 생성한 객체를 반환한다.
console.log(inst);
*/

/*

*/

//생성자 함수
function Circle(radius){
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
    if(!new.target){
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());