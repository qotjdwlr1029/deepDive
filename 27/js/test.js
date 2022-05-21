/*
//[예제27-06]
//배열의 생성자 함수는 Array이며, 배열의 프로토타입 객체는 Array.prototype이다.
const arr = [1,2,3];

console.log(arr.constructor == Array);
console.log(Object.getPrototypeOf(arr) == Array.prototype);
*/

/*
//[예제 27-08]
// 선형 검색을 통해 배열(Array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.

function linearSearch(array, target){
    const length = array.length;

    for(var i = 0;i<length;i++){
        if(array[i] === target) return i;
    }

    return -1;
}

console.log(linearSearch([1,2,3,4,5,6], 3));//2
console.log(linearSearch([1,2,3,4,5,6], 0));//-1
*/

// 배열의 요소가 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이를 밀집 배열이라 한다.
// 배열의 요소를 위한 데이터 공간은 동일하지 않을 수 있으며, 연속적으로 이어져 있지 않을 수 도 있다. 이를 희소 배열이라 한다.

/*
//[예제 27-09]
console.log(Object.getOwnPropertyDescriptors([1,2,3]));
{
    '0': { value: 1, writable: true, enumerable: true, configurable: true },
    '1': { value: 2, writable: true, enumerable: true, configurable: true },
    '2': { value: 3, writable: true, enumerable: true, configurable: true },
    length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

//length 프로퍼티는 요소의 갯수, 즉 배열의 길이를 나타내는 0 이상의 정수를 값으로 갖는다.
//length 프로퍼티의 값은 빈 배열일 경우 0이며, 빈 배열이 아닐 경우 가장 큰 인덱스에 1을 더한값과 같다.

/*
//[예제 27-13]
const arr = [1,2,3];
console.log(arr.length);    //3

arr.push(4);
console.log(arr.length);    //4

arr.pop();
console.log(arr.length);    //3
*/

//length프로퍼티 값은 요소의 갯수, 즉 배열의 길이를 바탕으로 결정되지만 임의의 숫자 값을 명시적으로 할당할 수 있다.
/*
//[예제 27-14]
const arr = [1,2,3,4,5];

arr.length = 3;

console.log(arr);   //[ 1, 2, 3 ]
*/

//length프로퍼티 값보다 큰 숫자를 할당하는 경우에는 실제 길이는 변경되지 않는다.
/*
//[예제 27-15]
const arr = [1];

arr.length = 3;

console.log(arr.length);//3
console.log(arr);       //[ 1, <2 empty items> ]
*/

/*
//[예제 27-17]
const sparse = [ ,2 , ,4];

console.log(sparse.length);

console.log(sparse);

console.log(Object.getOwnPropertyDescriptors(sparse));
*/

//Array 생성자 함수는 전달된 인수의 갯수에 따라 다르게 동작하므로 주의해야 한다.

/*
//[예제 27-21, 24, 25]

//인수가 1개만 입력되는 경우에는 length 프로퍼티 값이 인수인 배열을 생성한다.
const arr = new Array(10);

console.log(arr);
console.log(arr.length);

console.log(Object.getOwnPropertyDescriptors(arr));

//전달된 인수가 없는 경우 빈 배열을 생성한다.
console.log(new Array());

//전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
console.log(new Array(1,2,3));

console.log(new Array({}));
*/

/*
//[예제 27-27]
//Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.
console.log(Array.of(1));

console.log(Array.of(1,2,3));

console.log(Array.of('string'));
*/

/*
//[예제 27-28]
//Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 전달받아 배열로 변환한다.
console.log(Array.from({length : 2, 0 : 'a', 1 : 'b'}));
console.log(Array.from('hello'));
*/

/*
//[예제 27-41]
const arr = [1];
// push메서드는 원본 배열을 직접 변경한다.
arr.push(2);
console.log(arr);

//concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr);
console.log(result);
*/


/*
//[예제 27-42]
//isArray는 정적 메서드다. 인수가 배열이면 true, 배열이 아니면 false이다.

//true
console.log(Array.isArray([]));
Array.isArray([1,2]);
Array.isArray(new Array());

//false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
*/

/*
//[예제 27-43]
//indexOf 메서드는 인수로 전달된 요소를 검사하여 인덱스를 반환한다.
const arr =[1,2,2,3];
//첫 번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr.indexOf(1));
//없는 값을 넣으면 -1을 반환한다.
console.log(arr.indexOf(4));
//두 번째 인수는 검색을 시작할 인덱스이다.
console.log(arr.indexOf(2,2));
*/


/*
//[예제 27-44]
const foods = ['apple','banana','orange'];

if(foods.indexOf('orange') === -1){
    foods.push('orange');
}

console.log(foods);
*/

/*
//[예제 27-45]
const foods = ['apple','banana','orange'];

if(!foods.includes('orange')){
    foods.push('orange');
}

console.log(foods);
*/

/*
//[예제 27-50]
const Stack = (function(){
    function Stack(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor : Stack,
        push(value){
            return this.array.push(value);
        },
        pop(){
            return this.array.pop();
        },
        entries(){
            return [...this.array];
        }
    };

    return Stack;
}());

const stack = new Stack([1,2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());
*/

/*
//[예제 27-51]
class Stack{
    #array;

    constructor(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array`);
        }
        this.#array = array;
    }

    push(value){
        return this.#array.push(value);
    }

    pop(){
        return this.#array.pop();
    }

    entries(){
        return [...this.#array];
    }
}

const stack = new Stack([1,2,3]);
console.log(stack.entries());

stack.push(4);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());
*/

/*
//[예제 27-52]
//unshift메서드는 인수로 넣은 값을 배열의 맨 앞부터 추가를 하고, 추가 후의 length프로퍼티를 반환한다.

const arr = [1,2];

let result = arr.unshift(3,4);
console.log(result);

console.log(arr);
*/

/*
//[예제 27-54]
//shift메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
const arr = [1,2];

arr.shift();
console.log(arr);
*/

/*
//[예제 27-55]
const Queue = (function(){
    function Queue(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor : Queue,
        enqueue(value){
            return this.array.push(value);
        },
        dequeue(){
            return this.array.shift();
        },
        entries(){
            return [...this.array];
        }
    }

    return Queue;
}())

const queue = new Queue([1,2]);
console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());
*/

/*
//[예제 27-57]
//concat메서드는 원본 배열이 변경되지 않는다.
const arr1 = [1,2];
const arr2 = [3,4];

let result = arr1.concat(arr2);
console.log(result);

result = arr1.concat(3);
console.log(result);

result = arr1.concat(arr2, 5);
console.log(result);

console.log(arr1);
*/

/*
//[예제 27-58]
const arr1 = [3,4];

arr1.unshift(1,2);
console.log(arr1);

arr1.push(5,6);
console.log(arr1);

const arr2 = [3,4];

let result = [1,2].concat(arr2);
console.log(result);

result = result.concat(5,6);
console.log(result);
*/

/*
//[예제 27-59]
const arr = [3,4];

arr.unshift([1,2]);
arr.push([5,6]);
console.log(arr);

let result = [1,2].concat([3,4]);
result = result.concat([5,6]);
console.log(result);
*/

/*
//[예제 27-61]
const arr = [1,2,3,4];

const result = arr.splice(1,2,20,30);

console.log(result);

console.log(arr);
*/


/*
//[예제 27-75]
const arr = [1,2,3,4];

console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(':'));
*/

/*
//[예제 27-76]
const arr = [1,2,3];
const result = arr.reverse();

console.log(arr);
console.log(result);
*/

/*
//[예제 27-77]
const arr = [1,2,3];

console.log(arr.fill(0)); //[0,0,0];
*/

/*
//[예제 27-78]
const arr = [1,2,3];

arr.fill(0,1);

console.log(arr);
*/

/*
//[예제 27-79]
const arr = [1,2,3,4,5];

arr.fill(0,1,3);

console.log(arr);   //[ 1, 0, 0, 4, 5 ]
*/

/*
//[예제 27-80]
const arr = new Array(3);
console.log(arr);

const result = arr.fill(1);
console.log(arr);
console.log(result);
*/

/*
//[예제 27-81]
const sequences = (length = 0) => Array.from({length},(_,i) => i);
console.log(sequences(3));
*/


/*
//[예제 27-87]
const fruits = ['Banana','Apple','Orange'];

fruits.sort();

console.log(fruits);
*/

/*
//[예제 27-87]
const fruits = ['바나나','오렌지','사과'];

fruits.sort();

console.log(fruits);
*/

/*
//[예제 27-90]
const points = [40, 100, 1, 5, 2, 25, 10];

//sort 메서드의 기본 정렬 순서는 유니코드 코드 포인트의 순서를 따른다.
points.sort();

console.log(points);    //[ 1, 10, 100, 2, 25, 40, 5]
*/

/*
//[예제 27-93]
*/

const points = [40, 100, 1, 5, 2, 25, 10];

//숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points.sort((a,b) => a - b);
console.log(points);//[1,  2,   5, 10, 25, 40, 100]

console.log(points[0], points[points.length-1]);

//숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points.sort((a,b) => b - a);
console.log(points);

console.log(points[points.length-1], points[0]);