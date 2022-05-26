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

/*
//[예제34-09]
//유사배열객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length : 3
};

// 유사 배열 객체는 length 프로퍼티를 가지고 있기 때문에 for문으로 순회가 가능하다.
for(let i = 0 ; i < arrayLike.length;i++){
    // 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
    console.log(arrayLike[i]);
}
*/

/*
//[예제 34-10]
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length : 3
};


for(const item of arrayLike){
    console.log(item);      //arrayLike is not iterable
}
*/

/*
//[예제 34-12]

const fibonacci = {
    //Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
    [Symbol.iterator](){

        let [pre, cur] = [0, 1];
        const max = 10;

        //Symbol.iterator 메서드는 next메서드를 소유한 이터레이터를 반환해야하고
        //next 메서드는 이터레이터 리절트 객체를 반환해야한다.
        return{
            next(){
                [pre, cur] = [cur, pre + cur];
                // 이터레이터 리절트 객체를 반환한다.
                return {value : cur, done : cur >= max};
            }
        }
    }
}

for(const sum of fibonacci){
    console.log(sum);
}
*/

/*
//[예제 34-13]
// 이터러블은 스프레드 문법의 대상이 될 수 있다.
const arr = [...fibonacci];
console.log(arr);

//이터러블은 배열 디스트럭쳐링 할당의 대상이 될 수 있다.
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);
*/

/*
//[예제 34-14]
const fibonacciFunc = function(max){
    let [pre, cur] = [0, 1];

    return{
        [Symbol.iterator](){
            return{
                next(){
                    [pre, cur] = [cur, pre+cur];
                    return { value : cur, done : cur >= max };
                }            
            }
        }
    }
}

for( const num of fibonacciFunc(10) ){
    console.log(num);
}
*/


/*
//[예제 34-15]

//fibonacciFunc 함수는 이터러블을 반환한다.
const iterable = fibonacciFunc(5);
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

*/

/*
//[예제 34-16]
// 이터러블이면서 이터레이터인 객체
// 이터레이터를 반환하는 Symbol.iterator 메서드와 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
{
    [Symbol.iterator](){return this;},
    next(){
        return{ value : any , done : boolean}
    }
}
*/

/*
//[예제 34-17]
const fibonacciFunc = function(max){
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드와 next메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
    return{
        [Symbol.iterator](){return this},
        //next는 이터레이터 리절트 객체를 반환
        next(){
            [pre , cur] = [cur , pre + cur]
            return { value : cur , done : cur >= max}
        }
    }
}

//iter는 이터러블이면서 이터레이터이다.
let iter = fibonacciFunc(10);

//iter는 이터러블이므로 for...of문으로 순회할 수 있다.
for(const num of iter){
    console.log(num);
}

//iter는 이터러블이면서 이터레이터이다.
iter = fibonacciFunc(10);

//iter는 이터레이터 이므로 이터레이터 리절트 객체를 반환하는 next 메서드를 소유한다.
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/














