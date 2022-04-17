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

/*
//[예제 26-05]
ES6 사양에서는 메서드에 대한 정의가 명확하게 규정되었다.
ES6 사양에서는 메서드 축약 표현으로 정의된 함수만을 의미한다.

const obj = {
    x : 1,
    // foo는  메서드다.
    foo() { return this.x; },
    //bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
    bar : function() { return this.x; }
}

console.log(obj.foo());
console.log(obj.bar());
*/

//ES6 사양에서 정의한 메서드는 인스턴스를 생성할 수 없는 non-constructor다.

/*
//[예제26-06]
new obj.foo();  // obj.foo is not a constructor
new obj.bar();
*/

//ES6 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 생성하지 않는다.

/*
//[예제26-07]
console.log(obj.foo.hasOwnProperty('prototype'));   // false
console.log(obj.bar.hasOwnProperty('prototype'));   // true
*/

/*
//[예제26-11]

//화살표 함수 정의

const multiply = ( x, y ) => x * y;
console.log(multiply(2,3));
*/

//화살표 함수에서 객체를 반환하는 경우 소괄호로 감싸주어야 한다.
/*
//[예제26-18]

//const create = (id, content) => ({id, content});
create(1,'javascript');

//위 표현은 다음과 동일하다.
const create = (id, create) => { return { id, create }; };
*/

/*
//[예제 26-22]
//화살표 함수도 즉시 실행 함수로 사용할 수 있다.

const person = (name => {
    sayHi(){
        return `Hi! My name is ${name}.`;
    }
})('Lee');

console.log(person.sayHi());
*/

/*
// [예제 26-22]
// 화살표 함수의 특징
// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 3. 화살표 함수는 함수 자체에 this, arguments, super, new.target 바인딩을 갖지 않는다.
*/

/*
// [예제 26-28]
// 중첩함수의 this는 전역객체를 바인딩한다.
// 전역객체에는 prefix를 key로 가진 속성이 없기 때문에
// undefined를 출력하게 된다.

class Prefixer {
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(function(item){
            return this.prefix + item;  // Cannot read properties of undefined 
        })
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition','user-select']));
*/

//위와 같은 문제를 해결하기 위해서 ES6 이전에는 다음과 같은 방법을 사용했다.
// this를 일단 회피시킨 후에 콜백 함수 내부에서 사용한다.
/*
class Prefixer {
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        // this를 일단 회피시킨다.
        const that = this;

        return arr.map(function(item){
            // this 대신 that을 참조한다.
            return that.prefix + item
        })
    }
}
*/

/*
// Array.prototype.map은 두 번째 인수로 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다.
class Prefixer {
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(function(item){
            return this.prefix + item;
        },this)
    }
}
*/

/*
// [예제 26-31]
// Function.prototype.bind 메서드를 사용하여 add 메서드를 호출한 
// prefixer 객체를 가리키는 this를 바인딩한다.
class Prefixer {
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(function(item){
            return this.prefix + item;
        }.bind(this));
    }
}
*/

/*
// [예제 26-32]
// 화살표 함수는 함수 자체에 this 바인딩을 갖지 않는다.
// 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
// 이를 lexical this라 한다.
class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(item => this.prefix + item);
    };
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition','user-select']));
*/

// 만약 화살표 함수가 중첩되어 있다면 상위 화살표 함수에서도 this 바인딩이 없으므로 
// 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 반환한다.

/*
//[예제 26-34]
// bar 함수는 화살표 함수를 반환한다.
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다.
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.
(function(){
    const bar = () => () => console.log(this);
    bar()();
}).call({a : 1});
*/


/*
//[예제 26-48]
// 화살표 함수는 함수 자체에 arguments 바인딩을 갖지 않는다.
// 따라서 화살표 함수 내부에서 arguments를 함조하면 this와 
// 마찬가지로 상위 스코프의 arguments를 참조한다.

(function(){
    //화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
    const foo = () => console.log(arguments);
    foo(3,4); 
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
const foo = () => console.log(arguments);   // arguments is not defined
foo(1,2);
*/

// arguments 객체는  함수를 정의할 때 매개변수의 개수를 확정할 수 없는 
// 가변 인자 함수를 구현할 때 유용하다. 하지만 화살표 함수는 arguments 객체를 사용할 수 없다.
// 이 때문에 화살표 함수 자신에게 전달된 인수 목록을 확인할 수 없고 상위 함수에게 전달된 
// 인수 목록을 함조하므로 그다지 도움이 되지 않는다.

/*
//[예제 26-49]

//rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

function foo(...rest){
    // 매개변수 rest는 인수들이 목록을 배열로 전달받는 Rest 파라미터다.
    console.log(rest);
}

foo(1,2,3,4,5);
*/

/*
//[예제 26-50]
function foo(param, ...rest){
    console.log(param);
    console.log(rest);
}

foo(1,2,3,4,5);

function bar(param1, param2, ...rest){
    console.log(param1);
    console.log(param2);
    console.log(rest);
}

bar(1,2,3,4,5);
*/
