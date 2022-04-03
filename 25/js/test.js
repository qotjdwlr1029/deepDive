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


