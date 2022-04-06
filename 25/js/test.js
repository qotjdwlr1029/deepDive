// ES5에서는 클래스 없이도 다음과 같이 생성자 함수와 프로토타입을 통해서 객체지향 언어의 상속을 구현할 수 있다.

/*
//[예제 25-01]
// ES5 생성자 함수
var Person = (function(){

    function Person(name){
        this.name = name;
    }

    Person.prototype.sayHi = function(){
        console.log(`Hi! My name is ${this.name}`);
    }

    //생성자 함수 반환
    return Person;

}())

var me = new Person('Lee');
me.sayHi();
*/

//클래스는 class 키워드를 사용하여 정의한다. 클래스 이름은 파스칼 케이스를 사용하는 것이 일반적이다.
/*
//[예제 25-02]
//클래스 선언문
class Person {}
*/

//클래스는 이름을 가질 수도, 갖지 않을 수도 있다.
/*
//[예제 25-03]
//익명 클래스 표현식
const Person = class {};

//기명 클래스 표현식
const Person = class MyClass{};
*/

//클래스는 0개 이상의 메서드만 정의할 수 있다.
//클래스에 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.
/*
//[예제 25-04]
//클래스 선언문
class Person{
    //생성자
    constructor(name){
        // 인스턴스 생성 및 초기화
        this.name = name;   //name프로퍼티는 public하다.
    }

    //프로토타입 메서드
    sayHi (){
        console.log(`Hi! My name is ${this.name}`);
    }

    //정적 메서드
    static sayHello(){
        console.log('Hello!');
    }
}

//인스턴스 생성
const me = new Person('Lee');

//인스턴스의 프로퍼티 참조
console.log(me.name);

//인스턴스의 프로토타입 메서드 호출
me.sayHi();

//정적 메서드 호출
Person.sayHello();
*/ 


/*
//[예제 25-05]
//클래스 선언문
class Person {}

console.log(typeof Person);
*/
/*
//[예제 25-07]
// 클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않다.
const Person = '';

{   
    // 호이스팅이 발생하지 않는다면  ''이 출력되어야 한다.
    // 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는것 처럼 동작한다.
    // console.log(Person); <- TDZ

    //클래스 선언문
    class Person {};
}
*/

/*
//[예제 25-08]
// 클래스는 생성자 함수 이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.
class Person{}

// 인스턴스 생성
const me = new Person();
console.log(me);
*/

/*
//[예제 25-10]
const Person = class MyClass {};
//함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자이다.
console.log(MyClass);

const you = new MyClass();
*/

/*
//[예제 25-11]
//constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드이다.
class Person {
    // 생성자
    constructor(name){
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}
*/

/*
//[예제 25-15]
// constructor메서드는 클래스 내에 한 개만 존재할 수 있다.
class Person{
    constructor(){};
    constructor(){};
}
*/


/*
//[예제 25-16]
// constructor는 생략할 수 있다.
// constructor를 생략하면 빈 constructor가 암묵적으로 정의 된다.
class Person{}
*/

/*
//[예제 25-18]
//프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
class Person {
    constructor(){
        // 고정값으로 인스턴스 초기화
        this.name = 'Lee';
        this.address = 'Seoul';
    }
}

//인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me);
*/

/*
//[예제 25-19]

// 인스턴스 생성시에 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 constructor에 
// 매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다.
class Person {
    constructor(name, address){
        // 인수로 인스턴스 초기화
        this.name = name;
        this.address = address;
    }
}

// 인수로 초기값을 전달한다.
const me = new Person('Lee','Seoul');
console.log(me);

*/

/*
//[예제 25-20]
class Person {
    constructor(name){
        this.name = name;

        //명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다.
        return {};
    }
}

//constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person('Lee');
console.log(me);
*/


/*
//[예제 25-21]
class Person {
    constructor(name){
        this.name = name;

        //명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
        return 100;
    }
}

//constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person('Lee');
console.log(me);
*/

/*
//[예제 25-22]
//생성자 함수를 이용하여 객체를 생성하는 경우
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Lee');
me.sayHi();
*/


/*
//[예제 25-23]
// 클래스 몸체에서 정의한 메서드는 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 
// 기본적으로 프로토타입 메서드가 된다. 
class Person{
    //생성자
    constructor(name){
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    //프로토타입 메서드
    sayHi(){
        console.log(`Hi! My name is ${this.name}`);
    }

}

const me = new Person('Lee');
me.sayHi();
*/

/*
//[예제 25-24]
// me 객체의 프로토타입은 Person.prototype이다.
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person);

// Person.prototype의 프로토타입은 Object.prototype이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);

//me 객체의 constructor는 Person 클래스이다.
console.log(me.constructor === Person);
*/

/*
//[예제 25-26]

//클래스 정의가 평가되는 시점에 함수 객체가 되므로 인스턴스와 달리 별다른 생성 과정이 필요없다.
//정적 메서드는 인스턴스를 호출하지 않고 클래스로 호출한다.
class Person{
    //생성자
    constructor(name){
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    static sayHi(){
        console.log(`Hi!`);
    }
}

// 정적 메서드 호출
Person.sayHi();
*/

/*
//[예제 25-29]
class Square {
    //정적 메서드
    static area(width, height){
        return width * height;
    }
}

console.log(Square.area(10,10));
*/


/*
//[예제 25-32]
//클래스의 인스턴스 생성 과정
class Person{
    //생성자
    constructor(name){
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);
        console.log(Object.getPrototypeOf(this) === Person.prototype);

        // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
        this.name = name;

        // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    }
}
*/

/*
//[예제 25-34]
class Person {
    constructor(name){
        //인스턴스 프로퍼티
        this.name = name;   // name 프로퍼티는 public하다.
    }
}

const me = new Person('Lee');

console.log(me.name);
*/

/*
//[예제 25-35]
const person = {
    //데이터 프로퍼티
    firstName : 'Ungmo',
    lastName : 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
    // getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

// 데이터 프로퍼티를 통한 프로퍼티의 참조
console.log(`${person.firstName} ${person.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

// fullName은 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(person,'fullName'));
*/

/*
//[예제 25-36]
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
consols.log(`${me.firstName} ${me.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
me.fullName = 'Heegun Lee';
console.log(me);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(me.fullName);
*/

/*
//[예제 25-40]
// javascript에서 클래스 필드 정의는 표준 사양으로 적용되지는 않았으나.
// 최신 브라우저(Chrome72)와 최신 Node.js(버전 12 이상)에서 미리 구현을 하였다.
class Person{
    // 클래스 필드 정의
    name = 'Lee';
}


const me = new Person();
console.log(me.name);
*/

/*
//[예제 25-41]
class Person{
    // this에 클래스 필드를 바인딩해서는 안 된다.
    this.name = '';
}
*/


/*
//[예제 25-42]
class Person {
    //클래스 필드
    name = 'Lee';

    constructor(){
        console.log(name);  //자바스크립트에서는 this를 사용해야 한다.
    }
}
*/


/*
//[예제 25-43]
class Person {
    // 클래스 필드를 초기화 하지 않으면 undefined를 발생한다.
    name;
}

const me = new Person();
console.log(me.name);
*/


/*
//[예제 25-54]
class Animal {
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    eat() { return 'eat' };

    move() { return 'move' };
}

class Bird extends Animal {
    fly() { return 'fly' };
}

const bird  = new Bird(1, 5);

console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
*/

/*
//[예제 25-57]
//extends 키워드는 클래스뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수 있다.
function Base(a){
    this.a = a;
}

//생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived);   
*/

/*
//[예제 25-58]
// 동적으로 상속을 받을 수 있다.
function Base1(){}

class Base2 {}

let condition = true;

class Derived extends (condition ? Base1 : Base2){}

const derived = new Derived();
console.log(derived);

console.log(derived instanceof Base1);
console.log(derived instanceof Base2);
*/

/*
//[예제 25-61,62]
// 클래스에서 constructor를 생략하면 클래스에 비어있는 constructor가 암묵적으로 정의된다.
// 수퍼 클래스
class Base {}

// 서브클래스
class Derived extends Base {}

//위 예제의 클래스에는 다음과 같이 암묵적으로 constructor가 정의된다.
// 수퍼 클래스
class Base {
    constructor() {}
}

// 서브 클래스
class Derived extends Base{
    constructor(...args){ super(...args) }
}

const derived = new Derived();
console.log(derived);
*/

/* 
    super 키워드 
    super를 호출하면 수퍼클래스의 constructor를 호출한다.
    super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
*/

/*
//[예제 25-63]
// 수퍼글래스
class Base {
    constructor( a, b ){
        this.a = a;
        this.b = b;
    }
}

class Derived extends Base {
    // 다음과 같이 암묵적으로 constructor가 정의된다.
    // constructor(...args) { super(...args) };
}

const derived = new Derived(1,2);
console.log(derived);
*/


/*
//[예제 25-64]
// 수퍼 클래스
class Base {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

// 서브 클래스
class Derived extends Base {
    constructor( a, b, c ){
        super( a, b)
        this.c = c;
    }
}

const derived = new Derived(1,2,3);
console.log(derived);
*/

/*
//[예제 25-65]
// 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서는 반드시
// super를 호출해야한다.

class Base {}

class Derived extends Base {
    constructor(){
        //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        console.log('constructor call');
    }
}

const derived = new Derived();
*/

/*
//[예제 25-66]
// 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
class Base {}

class Derived extends Base {
    constructor(){
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.a = 1;
        super();
    }
}

const derived = new Derived(1);
*/

/*
//[예제 25-67]
// super는 반드시 서브클래스의 constructor에서만 호출한다.
// 서브클래스가 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러가 발생한다.

class Base {
    constructor(){
        //super();    //'super' keyword unexpected here
    }
}

function Foo(){
    //super();    //'super' keyword unexpected here
}
*/

/*
//[예제 25-68]
//super 참조
// 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

class Base {
    constructor(name){
        this.name = name;
    }

    sayHi () {
        return `Hi! ${this.name}`;
    }
}

// 서브클래스
class Derived extends Base {
    sayHi(){
        return `${super.sayHi()}. how are you doing?`;
    }
}

const derived = new Derived('Lee');
console.log(derived.sayHi());
*/

/*
//[예제 25-69]
//수퍼클래스
class Base{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    sayHi(){
        //__super는 Base.prototype을 가리킨다.
        const __super = Object.getPrototypeOf(Derived.prototype);
        return `${__super.sayHi()}`
    }
}
*/


