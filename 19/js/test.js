/* 
[예제 19-01]

//이름과 주소 속성을 갖는 객체
const person = {
    name : 'Lee',
    address : 'Seoul'
}

console.log(person);
*/

/*
[예제 19-02]
const circle ={
    radius : 5,

    getDiameter(){
        return 2 * this.radius;
    },

    getPerimeter(){
        return 2 * Math.PI * this.radius;
    },

    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
*/

/*
[예제 19-03]
//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        return Math.PI * this.radius ** 2;
    }
}

//반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

//반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());
*/

/*
[예제 19-04]
//생성자 함수
function Circle(radius){
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle생성자함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

//Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 한다.
//프토토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
//즉, Circle생성자 함수가 생성하는 모든 인스턴스에는 하나의 getArea메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());
*/

/*
[예제 19-06]
const obj = {};
const parent = { x : 1 };

//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x);
*/

/*
[예제 19-07]
const person = { name : 'Lee' }

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__'));

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype);
*/

/*
[예제 19-10]
const obj = {}

const parent = { x : 1 };

//obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);// obj.__proto__;

//obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x);
*/

/*
[예제 19-11]

//함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function(){}).hasOwnProperty('prototype'));

//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype'));
*/

/*
[예제 19-12]

//화살표 함수는 non-constructor이다.
const Person = name => {
    this.name = name;
}

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor이다.
const obj = {
    foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype'));

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype);
*/

/*
[예제 19-13]

//생성자 함수
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);
*/

/*
[예제 19-14]

//생성자 함수
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person);
*/

/*
[예제 19-15]
//obj 객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();
console.log(obj.constructor === Object);

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('x','y','return x + y');
console.log(add.constructor === Function);

// 생성자 함수
function Person(name){
    this.name = name;
}

// me 객체를 생성한 생성자 함수는 Person이다.
const me = new Person('Lee');
console.log(me.constructor === Person);
*/

/*
[예제 19-16]

//객체 리터럴
const obj = {};

//함수 리터럴
const add = function(a, b) {return a + b;}

//배열 리터럴
const arr = [1,2,3];

// 정규 표현식 리터럴
const regExr = /is/ig;
*/

/*
[예제 19-17]

//obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {}

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj.constructor === Object);
*/

/*
[예제 19-18]

//1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object{};
new Foo();

//2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj = new Object();
console.log(obj);

//3. 인수가 전달된 경우에는 인수를 객체로 반환한다.
// Number 객체 생성
obj = new Object(123);
console.log(obj);

//String 객체 생성
obj = new String('123')
console.log(obj);
*/

/*
[예제 19-19]

// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수이다.
console.log(foo.constructor === Function);
*/

/*
[예제 19-20]

// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype);

// 생성자 함수
function Person(name){
    this.name = name;
}
*/

/*
[예제 19-24]

const obj = { x : 1 };

//객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));
*/

/*
[예제 19-26]
const obj = new Object();
obj.x = 1;

Object생성자 함수에 의해 생성된 Obj 객체는 Object.prototype을 상속 받는다.
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));
*/

/*
[예제 19-28]
function Person(name){
    this.name = name;
}

Person.prototype.sayhello = function () {
    console.log(`Hi my name is ${this.name}`);
}

const me = new Person('Lee');
const you = new Person('Kim');

me.sayhello();
you.sayhello();
*/

/*
//[예제 19-29]
function Person(name){
    this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Lee');

// hasOwnPropert는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name'));

//[예제 19-30]
console.log(Object.getPrototypeOf(me) === Person.prototype);

//[예제 19-31]
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);

//[예제 19-32]
// hasOwnProperty는 Object.prototype의 메서드다.
// me객체는 프로토타입체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
console.log(me.hasOwnProperty('name'));
*/

/*
[예제 19-36]

const Person = (function(){
    //생성자 함수 
    function Person(name){
        this.name = name;
    }

    //프로토타입 메서드
    Person.prototype.sayHello = function(){
        console.log(`Hi my name is ${this.name}!`);
    }

    return Person;
}());

const me = new Person('Lee');

me.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`);
};

//인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello();

//[예제 19-37]
//인스턴스 메서드를 삭제한다..
delete me.sayHello;
//인스턴스에는 sayHello가 없으므로 프로토타입 메서드가 호출된다.
me.sayHello();

//[예제 19-38]
//프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
//삭제를 하려면 프로토타입에 직접 접근해야 한다.
delete me.sayHello;
//프로토타입 메서드가 호출된다.
me.sayHello();

//[예제 19-39]
//프로토타입 메서드 변경
Person.prototype.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`);
}

me.sayHello();

//프로토타입 메서드 삭제
delete Person.prototype.sayHello;

me.sayHello();
*/

/*
//[예제 19-40]
const Person = (function(){
    function Person(name){
        this.name = name;
    }

    Person.prototype = {
        sayHello(){
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Lee');

//[예제 19-41]
//프로토타입을 교체하면 constructor프로퍼티와  생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person);
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object);
*/

/*
//[예제 19-42]
const Person = (function(){
    function Person(name){
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        //constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor : Person,
        sayHello (){
            console.log(`Hi My name is ${this.name}`);
        }
    }

    return Person;
}());

const me = new Person('Lee');

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me.constructor === Person);
console.log(me.constructor === Object);
*/

/*
//[예제 19-43]
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

const parent = {
    sayHello () {
        console.log(`Hi my name is ${this.name}!!`);
    }
};

// ① me 객체 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me,parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;
me.sayHello();
*/

/*
//[예제 19-45]
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//프로토타입으로 교체할 객체
const parent = {
    //constructor 프로퍼티와 생서자 함수 간의 연결을 설정
    constructor : Person,
    sayHello (){
        console.log(`Hi! My name is ${this.name}`);
    }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입간의 연결을 설정
Person.prototype = parent;

//me 객체의 프로토타입을 parent객체로 교체한다.
Object.setPrototypeOf(me, parent);
//위 코드는 아래의 코드와 동일하게 동작한다.
//me.__proto__ = parent;
me.sayHello();

//constructor프로퍼티가 Person생성자 함수를 가리킨다.
console.log(me.constructor === Person);
console.log(me.constructor === Object);

//생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person.prototype === Object.getPrototypeOf(me));
*/

/*
//[예제 19-46]

//생성자 함수
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true다.
console.log(me instanceof Person);

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true다.
console.log(me instanceof Object);
*/

/*
//[예제 19-47]
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

const parent = {};

Object.setPrototypeOf(me, parent);

//Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);   //false
console.log(parent.constructor === Person); //false

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가된다.
console.log(me instanceof Person);          //false

//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하기 때문에 true로 평가된다.
console.log(me instanceof Object);          //true
*/

/*
//[예제 19-48]
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//프로토타입으로 교체할 객체
const parent = {};

//프로토타입의 교체
Object.setPrototypeOf(me, parent);

//Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);           //false
console.log(parent.constructor === Person);         //false

// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person);                  //true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);                  //true
*/

/*
function Person(name){
    this.name = name;
}

const me = new Person('Lee');
//[예제 19-49]
function isInstanceof(instance, constructor){
    //프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);
    // 재귀탈출조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if(prototype === null) return false;

    //프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    // 그렇제 않다면 재귀호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
*/

/*
//예제[19-51]

//프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);
// Object.prototype을 상속받지 못한다.
//console.log(obj.toString());

// obj -> Object.prototype -> null
// obj = {} 과 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

// obj -> Object.prototype -> null
// obj = { x : 1 }와 동일하다.
obj = Object.create(Object.prototype,{
    x : { value : 1, writable : true, enumerable : true, configurable : true }
});

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x : 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.Prototype -> null
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

function Person(name){
    this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);
*/

/*
//[예제 19-55]
const myProto = { x : 10 };

const obj = {
    y : 20,
    __proto__ : myProto
};

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);
*/

/*
//[예제 19-56]
function Person(name){
    this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`);
}

//정적 프로퍼티
Person.staticProp = 'static prop';

//정적 메서드
Person.staticMethod = function(){
    console.log('staticMethod');
}

const me = new Person('Lee');

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
Person.staticMethod();

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다.
me.staticMethod();
*/

/*
//[예제 19-59]
const person = {
    name : 'Lee',
    address : 'Seoul'
}

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);
// person 객체에 address 프로퍼티가 존재한다.
console.log('address' in person);
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log('age' in person);

//대상 객체가 상속 받는 모든 프로토타입의 프로퍼티를 확인한다.
*/

/*
//[예제 19-60]
const person = {
    name : 'Lee',
    address : 'Seoul'
}

console.log('toString' in person);
*/

/*
//[예제 19-61]
const person = {
    name : 'Lee'
}

console.log(Reflect.has(person,'name'));
console.log(Reflect.has(person,'toString'));
*/

/*
//[예제 19-62]
const person = {
    name : 'Lee'
}

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));

//hasOwnProperty메서드는 상속받은 프로퍼티 키인 경우에 false를 반환한다.
console.log(person.hasOwnProperty('toString'));
*/

/*
//[예제 19-64]
const person = {
    name : 'Lee',
    address : 'seoul'
};

// for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for(const key in person){
    console.log(key + ': ' + person[key]);
}
//name:Lee
//address:seoul
*/

/*
//[예제 19-65]
const person = {
    name : 'Lee',
    address : 'seoul'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person);

// for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for(const key in person){
    console.log(key + ': ' + person[key]);
}
*/

/*
//[예제 19-66]
//toString메서드가 열거할 수 없도록 정의되어 있는 프로퍼티이기 때문이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
*/

//for ... in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티
//중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하여 열거한다.

/*
//[예제 19-67]
const person = {
    name : 'Lee',
    address : 'Seoul',
    __proto__ : {age : 20}
}

for(key in person){
    console.log(key , ' : ', person[key]);
}
*/

/*
//[예제 19-69]
const person = {
    name : 'Lee',
    address : 'Seoul',
    __proto__ : {age : 20}
}

for(key in person){
    if(!person.hasOwnProperty(key)) continue;
    console.log(key , ': ', person[key]);
}
*/

const person = {
    2 : 2,
    3 : 3,
    1 : 1,
    b : 'b',
    a : 'a'
}

for(key in person){
    if(!person.hasOwnProperty(key)) continue;
    console.log(key , ': ', person[key]);
}
