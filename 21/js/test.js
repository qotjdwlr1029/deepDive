/*
//[예제 21-01]

//String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new String(123);
console.log(typeof numObj);

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);

//Function 생성자 함수에 의한 Function 객체 생성
const func = new Function('x','return x * x');
console.log(typeof func);

//Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1,2,3);
console.log(typeof arr);

//RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);

// Date 생성자 함수에 의한 Date객체 생성
const date = new Date();
console.log(typeof date);
*/

/*
//[예제 21-02]
const strObj = new String('Lee');

// String 생성자 함수를 통해 생성한 StrObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype);
*/

/*
//[예제 21-03]
const numObj = new Number(1.5);

// toFixed 메서드는 Number.prototype의 프로토타입 메서드이다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed());

//isInteger는 Number의 정적 메서드이다.
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean을 반환한다.
console.log(Number.isInteger(0.5));
*/

/*
//[예제 21-04]
const str = 'hello';

//원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length);
console.log(str.toUpperCase());
*/

/*
//[예제 21-05]
const str = 'hi';

//원시 타입인 문자열이 래퍼 객체인  String 인스턴스로 변환한다.
console.log(str.length);
console.log(str.toUpperCase());

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str);
*/

/*
//[예제 21-06]
// ① 식별자 str은 문자열을 값으로 가지고 있다.
const str = 'hello';

// ② 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str.name = 'Lee';

// ③ 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 들롯에 할당된 원시값을 갖는다.
// 이때 ②에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// ④ 식별자 str은 새롭게 암묵적으로 생성된 ( ②에서 생성된 래퍼 객체와는 다른 ) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name);

// ⑤ 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 ④에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str);
*/

/*
//[예제 21-07]
const num = 1.5;

//원시타입인 숫자가 래퍼 객체인 String 객체로 변환된다.
console.log(num.toFixed());

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num);
*/