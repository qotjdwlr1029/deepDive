//스프레드 문법을 사용할 수 있는 대상은 for...of문으로 순회할 수 있는 이터러블에 한정된다.

/*
//[예제 35-01]
//...[1,2,3]은 [1,2,3]을 개별 요소로 분리한다.( -> 1,2,3)
console.log(...[1,2,3]);

//문자열은 이터러블이다.
console.log(...'hello');

//Map과 Set은 이터러블이다.
console.log(...new Map([['a' ,'1'],['b','2']]))
console.log(...new Set([1,2,3]))

//이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{ a:1, b:2 })
*/

/*
//[예제 35-03]
const arr = [ 1, 2, 3 ];

// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
const max = Math.max(arr);
console.log(max);   //NaN
*/


/*
//[예제 35-04]

console.log(Math.max(1));
console.log(Math.max(1,2));
console.log(Math.max(1,2,3));
console.log(Math.max());

//Math.max는 배열을 인수로 받으면 NaN을 반환한다.
*/

/*
//[예제 35-06]
var arr = [1,2,3];

// apply 함수의 2번째 인수(배열)은 apply 함수가 호출하는 함수의 인수 목록이다.
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.

var max = Math.max.apply(null,arr);
console.log(max);
console.log(Function.prototype.apply(null,arr));
*/

/*
//[예제 35-07]
const arr = [ 1, 2, 3 ];

const max = Math.max(...arr);
console.log(max);
*/

/*
[예제 35-09, 10]
var arr = [1, 2].concat([3, 4]);
console.log(arr);

const arr1 = [...[1,2],...[3,4]];
console.log(arr1);
const arr1 = [...[1,2],...[3,4]];
for(const value of arr1){
    console.log(value);
}*/

/*
//[예제 35-11, 12, 13]
//ES5
var arr1 = [1,4];
var arr2 = [2,3];

// 세번째 인수 arr2를 해체하여 전달해야 한다.
// 그렇지 않다면 arr1에 arr2 배열 자체가 추가된다.

arr1.splice(1,0,arr2);
console.log(arr1);  //[ 1, [ 2, 3 ], 4 ]

//ES5

var arr1 = [1,4];
var arr2 = [2,3];

//      apply 메서드의 2번째 인수(배열)는 apply 메서드가 호출한 splice 메서드의 인수 목록이다.
//      apply 메서드의 2번째 인수 [1, 0].concat(arr2)는 [1, 0, 2, 3]으로 평가된다.
//      따라서 splice 메서드에 apply 메서드의 2번째 인수 [1, 0, 2, 3]이 해체되어 전달된다.
//      즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr1[1])에 새로운 요소(2, 3)를 삽입한다.

Array.prototype.splice.apply(arr1, [1, 0].concat([2, 3]));
console.log(arr1);

//ES6
const arr3 = [1, 4];
const arr4 = [2, 3];

arr3.splice(1,0,...arr4);
console.log(arr3);
*/

/*
//[예제 35-14, 15]
// ES5
var origin = [1, 2];
var copy = origin.slice();

console.log(copy);
console.log(origin === copy);

//ES6
var origin1 = [1, 2];
var copy1 = origin1.slice()
*/
