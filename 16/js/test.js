

/*
[예제 16-01]
const o = {};
//내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
//o.[[prototype]]
//단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
o.__proto__ // -> Object.prototype
*/

/*
[예제 16-02]
const person = {
    name : 'Lee'
}
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person,'name'));
// { value: 'Lee', writable: true, enumerable: true, configurable: true }
*/

/*
[예제 16-03]
const person ={
    name : 'Lee'
}

//프로퍼티 동적 생성
person.age = 20;

//모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 
console.log(Object.getOwnPropertyDescriptors(person));


{
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/

/*
[예제 16-04]

value : 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
writable : 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
enumerable : 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.
configurable : 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.

const person = {
    name : 'Lee'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

{ value: 'Lee', writable: true, enumerable: true, configurable: true }

*/

/*
[예제 16-05]


const person = {
    name : 'Lee'
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

*/

/*
[예제 16-06] 
const person = {
    //데이터 프로퍼티
    firstName : 'Ungmo',
    lastName : 'Lee',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    //setter 함수
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName, ' ', person.lastName);

//접근자 프로퍼티를 통한 프로퍼티 값의 설정
//접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
console.log('get fullName : ',person.fullName);

person.fullName = 'Heegun Lee';

//접근자 프로퍼티를 통한 프로퍼티의 값을 참조
//접근파 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
console.log('get fullName after access property fullName ',person.fullName);

// firstName은 데이터 프로퍼티이다.
// 데이터 프로퍼니는 [[value]],[[configurable]],[[enumerable]],[[writable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);

*/

/*
[예제 16-07]

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));

console.log(Object.getOwnPropertyDescriptor(function() {},'prototype'));
*/

/*
const person = {}

Object.defineProperty(person,'firstName',{
    value : 'SungJik'
    , writable : true
    , configurable : false
    , enumerable : true
});

Object.defineProperty(person,'lastName',{
    value : 'Bae'
})

let descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log('firstName : ',descriptor);

descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName : ',descriptor);

console.log(Object.keys(person));

person.lastName = 'Kim';

delete person.lastName;
console.log('person.lastName ', person.lastName);

descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName ', descriptor);

Object.defineProperty(person,'fullName',{
    get(){
        return `${this.firstName} ${this.lastName}`
    },
    
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable : false,
    configurable : false
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName ', descriptor);

person.fullName = 'HyunJik Bae';
console.log(person);
*/

/*
[예제 16-09]
const person = {};

Object.defineProperties(person,{
    firstName : {
        value : 'Ungmo'
        , writable : true
        , configurable : true
        , enumerable : true
    },
    lastName : {
        value : 'Lee'
        , writable : true
        , configurable : true
        , enumerable : true
    },
    fullName : {
        get(){
            return `${this.firstName} ${this.lastName}`
        },

        set(name){
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable : true,
        configurable : true,
    }
});

person.fullName = 'Heegun Lee';
console.log(person);
*/

/*
[예제 16-10]

const person = { name : 'Lee' };

console.log(Object.isExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

Object.defineProperty(person,'age',{value : 20});
*/


/*
[예제 16-11]

const person = { name : 'Lee' };

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

person.name = 'Kim';
console.log(person);

Object.defineProperty(person,'name',{
    configurable : true
})

*/

/*
[예제 16-13]

const person = { name : 'Lee' }

console.log(Object.isFrozen(person));

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.keys(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

person.name = 'Kim';
console.log(person);

Object.defineProperty(person,'name',{
    configurable : true
});

*/

function deepFreeze(target){
    //객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결한다.
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);

        Object.keys(target).forEach(val => deepFreeze(target[val]));
    }
    return target;
}

const person = {
    name : 'Lee'
    , address : { city : 'Seoul' }
};

deepFreeze(person);

console.log(Object.isFrozen(person));

console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);