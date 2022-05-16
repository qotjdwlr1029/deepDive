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



