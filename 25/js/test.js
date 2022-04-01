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
*/ 

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