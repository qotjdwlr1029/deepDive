/*
//[예제 33-01]
//Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
const mySymbol = Symbol();
console.log(typeof mySymbol);

//심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol);
*/


/*
//[예제 33-03]
// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2);   // false
console.log(mySymbol1 == mySymbol2);   // false
*/

/*
//[예제 33-04]
const mySymbol = Symbol('mySymbol');

//심벌도 래퍼 객체를 생성한다.
console.log(mySymbol.description);
console.log(mySymbol.toString());
*/

/*
//[예제 33-05]
const mySymbol = Symbol();

//암묵적으로 문자열로 변환 되지 않는다.
console.log(mySymbol + '');
*/

/*
//[예제 33-06]
const mySymbol = Symbol();

//boolean으로는 변환이 된다.
console.log(!!mySymbol);

//if문으로 존재여부 확인이 가능하다.
if(mySymbol) console.log('mySymbol is not empty!!');
*/

/*
//[예제 33-07]
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for('mySymbol');
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2);
*/

/*
//[예제 33-08]
const s1 = Symbol.for('mySymbol');
console.log(Symbol.keyFor(s1)); //mySymbol

// Symbol함수를 사용하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리하지 않는다.
const s2 = Symbol('foo');
console.log(Symbol.keyFor(s2)); //undefined
*/

/*
//[예제 33-12]
const obj = {
    // 심벌 값으로 프로퍼티 키를 생성하려면 키로 사용할 심벌 값에 대괄호를 사용해야 한다.
    [Symbol.for('mySymbol')] : 1
}

console.log(obj[Symbol.for('mySymbol')]);       //1
*/

/*
//[예제 33-13, 14]
//심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 
//for ... in 문이나 Object.key, Object.getOwnPropertyNames 메서드로 찾을 수 없다.
const obj = {
    [Symbol.for('mySymbol')] : 1
};

for(const key in obj){
    console.log(key);   // 아무것도 출력되지 않는다.
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

//getOwnPropertySymbols 메서드를 사용하면 찾을 수 있다.
console.log(Object.getOwnPropertySymbols(obj));

const symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log(symbolKey);
console.log(obj[symbolKey]);
*/


/*
//[예제 33-16]
Array.prototype[Symbol.for('sum')] = function(){
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2, 3, 4][Symbol.for('sum')]());
*/

/*
//[예제 33-17]
const iterable = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator](){
        let cur = 1;
        const max = 5;
        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
        return {
            next(){
                return {value : cur++, done : cur > max + 1}
            }
        };
    }
};

for(const num of iterable){
    console.log(num);
}
*/


