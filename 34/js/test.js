//이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.
//즉 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나
//프로토타입 체인을 통해 상속 받은 객체를 말한다.

/*
//[예제 34-01]
//이터러블을 확인하는 함수는 다음과 같다.
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';
//null이 아니고 각 래퍼 클래스로부터 Symbol.iterator를 상속받는 경우

console.log(isIterable([])); //true
console.log(isIterable('')); //true
console.log(isIterable(new Map())); //true
console.log(isIterable(new Set())); //true
console.log(isIterable({})); //false
*/

/*
//[예제 34-02]
const array = [1,2,3];

console.log(Symbol.iterator in array);      //true

// 이터러블인 배열은 for ... of 문으로 순회가 가능하다.
for(const item of array){
    console.log(item);
}

// 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
console.log([...array]);

// 이터러블인 배열은 배열 디스트럭쳐링 할당의 대상으로 사용할 수 있다.
const [a, ...rest] = array;
console.log(a, rest);
*/

/*
//[예제 34-03]
//이터러블이 아닌 객체는 for ... of, 배열 디스트럭쳐링 할당을 할 수 없다.
const obj = { a : 1, b : 2};

console.log(Symbol.iterator in obj);

for(const item of obj){
    console.log(item);
}

const [a, b] = obj;
*/

/*
//[예제 34-05]
const array = [1,2,3];

//Symbol.iterator는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

//Symbol.iterator 메서드가 반환한 이터레이터는 next메서드를 갖는다.
console.log('next' in iterator);
*/

/*
//[예제 34-06]
const array = [1,2,3];

const iterator = array[Symbol.iterator]();

//next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
//[예제 34-08]
const iterable = [1,2,3];

const iterator = iterable[Symbol.iterator]();

for( ;; ){
    const res = iterator.next()

    if(res.done) break;

    const item = res.value;
    console.log(item);
}
*/






