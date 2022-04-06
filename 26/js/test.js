/*
//[예제 26-01]
//ES6 이전의 함수는 동일한 함수라도 다양한 형태로 호출할 수 있다.
var foo = function(){
    return 1;
}

//일반적인 함수로 호출
foo();

// 생성자 함수로서 호출
new foo();

// 메서드로서 호출
var obj = {foo : foo};
obj.foo();
*/

// ES6 이전의 모든 함수는 일반함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
// callable이면서 constructor이다.

/*
//[예제 26-03]
// 프로퍼티 f에 바인딩된 함수는 callable이며 constructor이다.
var obj = {
    x : 10,
    f : function(){ return this.x; }
}

// 프로퍼티 f에 바인딩된 함수는 메서드로서 호출
console.log(obj.f());

// 프로퍼티 f에 바인딩된 함수는 일반 함수로서 호출
var bar = obj.f;
console.log(bar);

// 프로퍼티 f에 바인딩된 함수는 생성자 함수로서 호출
console.log(new obj.f);
*/

// 이는 성능면에서 문제가 있다. constructor라는 것은 객체에 바인딩된 함수가 prototype프로퍼티를 가지며
// 프로토타입 객체도 생성한다는 것을 의미한다.

// 콜백 함수도 constructor이기 때문에 불필요한 프로토타입 객체를 생성한다.
/*
//[예제 26-04]
//콜백 함수를 사용하는 고차 함수 map. 콜백함수도 constructor이며 프로토타입을 갖는다.
[1,2,3].map(function(item){
    return item * 2;
})
*/



